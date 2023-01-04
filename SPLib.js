/**********************************
*
*  Created By SURAJ CHAKRAWARTI.
*                               
*  Follow me at @asksunps       
*
**********************************/


class SharePointList {
  constructor(listName, siteUrl) {
    this.listName = listName;
    this.siteUrl = siteUrl;
  }

  // List Read operation
  getListItems() {
    return $.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items`,
      method: "GET",
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });
  }

  // List Create operation
  addListItem(item) {
    return $.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items`,
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(item),
      headers: {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val()
      }
    });
  }

  // List Update operation
  updateListItem(itemId, item) {
    return $.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${itemId})`,
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(item),
      headers: {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "X-HTTP-Method": "MERGE",
        "If-Match": "*"
      }
    });
  }

  // List Delete operation
  deleteListItem(itemId) {
    return $.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('${this.listName}')/items(${itemId})`,
      type: "POST",
      headers: {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "X-HTTP-Method": "DELETE",
        "If-Match": "*"
      }
    });
  }

  // File Read operation
  getLibraryFiles() {
    return $.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('${this.libraryName}')/items`,
      method: "GET",
      headers: {
        "Accept": "application/json; odata=verbose"
      }
    });
  }

  // File Create operation
  addLibraryFile(fileName, fileContent) {
    // Convert the file content to a base64-encoded string
    const base64FileContent = btoa(fileContent);

    const fileUrl = `${this.siteUrl}/${this.libraryName}/${fileName}`;
    const itemType = "SP.Data.${this.libraryName}Item";

    const item = {
      "__metadata": { "type": itemType },
      "FileName": fileName,
      "Content": base64FileContent
    };

    return $.ajax({
      url: `${this.siteUrl}/_api/web/lists/getbytitle('${this.libraryName}')/items`,
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(item),
      headers: {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val()
      }
    });
  }

  // File Update operation
  updateLibraryFile(fileName, fileContent) {
    // Convert the file content to a base64-encoded string
    const base64FileContent = btoa(fileContent);

    const fileUrl = `${this.siteUrl}/${this.libraryName}/${fileName}`;
    const itemType = "SP.Data.${this.libraryName}Item";

    const item = {
      "__metadata": { "type": itemType },
      "Content": base64FileContent
    };

    return $.ajax({
      url: `${fileUrl}/_api/web/lists/getbytitle('${this.libraryName}')/items`,
      type: "POST",
      contentType: "application/json;odata=verbose",
      data: JSON.stringify(item),
      headers: {
        "Accept": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "X-HTTP-Method": "MERGE",
        "If-Match": "*"
      }
    });
  }

}