<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebFormFoxit.aspx.cs" Inherits="WebApp461.WebFormFoxit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Foxit PDF</title>

    <link href="Assets/FoxitPDFSDK/lib/PDFViewCtrl.css" rel="stylesheet" />
    <link href="Assets/FoxitPDFSDK/lib/UIExtension.css" rel="stylesheet" />

    <style>
        .fv__ui-tab-nav li span {
            color: #636363;
        }

        .flex-row {
            display: flex;
            flex-direction: row;
        }
    </style>


    <script src="Assets/FoxitPDFSDK/lib/PDFViewCtrl.full.js"></script>

    <script src="Assets/FoxitPDFSDK/lib/UIExtension.full.js"></script>
    <script src="Assets/FoxitPDFSDK/lib/preload-jr-worker.js"></script>

    <%--<script src="Assets/FoxitPDFSDK/lib/WebPDFJRWorker.js"></script>--%>
   
</head>
<body>

    <div id="pdf-ui""></div>

<script>
 var licenseSN1 = "IAD23HOeFBF7CVQgY7Zouaf3ZF4V411pgQPqUts06ouhAoETf4b56g==";
 var licenseKey1 = "PjwcmTSwOV6obxtUBTkWC1T6c+v7y4v6QY63XqFtjqejpdPyDWZjsVlZ6xPobyo3teq+l1SNakBp7IprOdPShgGNNEJEKoDwRaexeYVIZA1LD+Jlb+kE9j6ZLZDVB6jygWQbdK4WwEK6Sll6ONC8mHCsygksfqQzO7UOcdE6EuRTOV1Tv43COEESGRie4jlm63XOttvHC19w9fsUO/wCgSlNJji+XqBQpArwShAA3F3hK+BVW/8SEhnUUoK9WhoP/djQ37fpDl8nD6JppGpOLOC45LqkiAlTTroErywEQnf7me+zuWGMr/KOY5HXDZ2rc7o4YFbyHdRqBXzSswiXiBfOtFNEuTb8DyQV+xD0WYMRS8BHpQG8dy46yzyvPZX9+WulJKaEudAdBLsO86St76Hm8nfR6kK11w6xnnqw8tiFrBfFHbTrctfZK/xDS/cuBPUQBZIlaBPHGHn7aVSaHAbfkBpBFsGWrtaHuZgbbrHucR8RYcvUqlw+YZURFLvJzJbUFLOQ74qOx8lftQTLalU6upJ1qai4y7nC3TtW7M3JceK3Q6HPxBeK12IoEvRWeOVdILl0HKOdx98WQUvjY95gwSp27Taa6XpV2lZRtbz9XCxNOut0P6kUFifXPTLdEFpHocW4jcD4nhhCQke7rCNc7gPbcP0sfV5znvKDUMfRl/yitDlfXAMFnZUDC8qj8DvACji9d1yEJz4Q5TPF9LgBHaCfM4TkaT68FyZkZlaYAo9mTk3eOg/ibv64Bvr4z06mmxBzGtOQCVhQHvqk4/qdD1SAqx5tz0J2cp930vRC2xnEqbtdObwPPTkrQjBoSLRM+DUHCofWfzAXJdyjc4leTywEGhvaSSMrSfGkGBDHpvjr2QFqML9R+DJ0ObCTwNvOofEpgtK+ddGvHOmXIJhqtLuPYukW9RIW5arF6AgTp6Qvz08Hfh6miFw80ILYPz6EjcLNTR9iYvID5i8puyurBXp9Rc9ggk3YSbQysgBExeJk+4g17/SNOGxN+E79mSzdvL0sB06Aibu096+xFmCRlpr3TTn085lxpfmy5TjnK3tUvg18IJOUfOizZDIWRMxQ4X/SeZczNv07uJYZNW9lZwTYQ6YoR9X/R1kUaum+P4HJcYXNIqEjF4XD/1Ajto20ginHuCwnJRnUvPqy4JfwRWQoYeuY0JCZ0/gRUpeYXYdiiXb6mntjhSGNoBdeEZxknCrrC6aLSg4u6bY0Xpt9LQ==";

    var readyWorker = preloadJrWorker({
        workerPath: '/Assets/FoxitPDFSDK/lib/',
        enginePath: '/Assets/FoxitPDFSDK/lib/jr-engine/gsdk',
        fontPath: '/Assets/FoxitPDFSDK/external/brotli',
        licenseSN: licenseSN1,
        licenseKey: licenseKey1
    });

    var pdfui = new UIExtension.PDFUI({
        viewerOptions: {
            libPath: '/Assets/FoxitPDFSDK/lib', // the library path of web sdk.
            jr: {
                readyWorker: readyWorker
            }
        },
        renderTo: '#pdf-ui' // the div (id="pdf-ui").
    });

    // modify the file path as your need.
    fetch('Assets/sample.pdf').then(function (response) {
        response.arrayBuffer().then(function (buffer) {
            pdfui.openPDFByFile(buffer);
        })
    });


</script>

    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
