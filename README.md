# SPLib
A SharePoint library is a location within a SharePoint site where users can create, store, and manage files. Libraries support common file types such as Microsoft Office documents, PDFs, and images.

SharePoint is a web-based collaborative platform that integrates with Microsoft Office. It allows users to store, share, and manage documents and other types of content such as images, videos, and web pages.

A SharePoint library is a location within a SharePoint site where users can create, store, and manage files. Libraries support common file types such as Microsoft Office documents, PDFs, and images.

CRUD is an acronym for Create, Read, Update, and Delete. These are the four basic operations that can be performed on data in a database or other storage system.

In the context of SharePoint libraries, CRUD operations refer to the ability to create new files in the library, read or retrieve existing files, update the content or metadata of a file, and delete a file.

The example script provided earlier is an object-oriented approach to performing these operations using JavaScript. The SharePointLibrary class includes methods for each of the CRUD operations:

The getLibraryFiles method performs a read operation, retrieving all the files in the library.
The addLibraryFile method performs a create operation, adding a new file to the library.
The updateLibraryFile method performs an update operation, replacing the content of an existing file in the library.
The deleteLibraryFile method performs a delete operation, deleting a file from the library.
These methods use the SharePoint REST API to send HTTP requests to the SharePoint server, with the appropriate HTTP verb (GET, POST, MERGE, DELETE) and payload (query parameters, JSON data) for each operation.



