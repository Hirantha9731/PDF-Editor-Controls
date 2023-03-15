<%@ Page Title="PSPDF Page" Language="C#" AutoEventWireup="true" CodeBehind="WebFormPSPDF.aspx.cs" Inherits="WebApplicationPDFvs2022v461.WebFormPSPDF" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ps pdf kit</title>
</head>
<body>

    <div id="pspdfkit" style="width: 100%; height: 100vh;"></div>

    <script src="Assets/pspdfkit/pspdfkit.js"></script>
    <script>

        let instance;
        const downloadButton = {
            type: "custom",
            id: "save-pdf",
            icon: "Assets/Icons/save.png",
            title: "Save",
            onPress: async () => {
                try {
                    const arrayBuffer = await instance.exportPDF();
                    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
                    const formData = new FormData();
                    formData.append("file", blob,"test.pdf");
                    await fetch("https://localhost:44359/api/FileUploading/UploadFile", {
                        method: "POST",
                        body: formData
                    });
                    alert("file saved to remote location successfully")
                }
                catch (error) {
                    console.error(error);
                }
            }
        };


	    PSPDFKit.load({
		    container: "#pspdfkit",
            document: "Assets/sample.pdf",
            toolbarItems: PSPDFKit.defaultToolbarItems.concat([downloadButton])
        })
            .then((_instance) => {
                instance = _instance;
            })
		    .then(function(instance) {
			    console.log("PSPDFKit loaded", instance);
		    })
		    .catch(function(error) {
			    console.error(error.message);
            });

    </script>



    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>
