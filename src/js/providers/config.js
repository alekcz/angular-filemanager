(function(angular) {
    "use strict";
    angular.module('FileManagerApp').provider("fileManagerConfig", function() {

        var values = {
            appName: "https://github.com/joni2back/angular-filemanager",
            defaultLang: "en",

            listUrl: "http://localhost:8080",
            uploadUrl: "http://localhost:8080",
            renameUrl: "http://localhost:8080",
            copyUrl: "http://localhost:8080",
            removeUrl: "http://localhost:8080",
            editUrl: "http://localhost:8080",
            getContentUrl: "http://localhost:8080",
            createFolderUrl: "http://localhost:8080",
            downloadFileUrl: "http://localhost:8080",
            compressUrl: "http://localhost:8080",
            extractUrl: "http://localhost:8080",
            permissionsUrl: "http://localhost:8080",

            sidebar: true,
            breadcrumb: true,
            allowedActions: {
                rename: true,
                copy: true,
                edit: true,
                changePermissions: true,
                compress: true,
                compressChooseName: true,
                extract: true,
                download: true,
                preview: true,
                remove: true
            },

            enablePermissionsRecursive: true,
            compressAsync: true,
            extractAsync: true,

            isEditableFilePattern: /\.(txt|html?|aspx?|ini|pl|py|md|css|js|log|htaccess|htpasswd|json|sql|xml|xslt?|sh|rb|as|bat|cmd|coffee|php[3-6]?|java|c|cbl|go|h|scala|vb)$/i,
            isImageFilePattern: /\.(jpe?g|gif|bmp|png|svg|tiff?)$/i,
            isExtractableFilePattern: /\.(gz|tar|rar|g?zip)$/i,
            tplPath: 'src/templates'
        };

        return { 
            $get: function() {
                return values;
            }, 
            set: function (constants) {
                angular.extend(values, constants);
            }
        };
    
    });
})(angular);
