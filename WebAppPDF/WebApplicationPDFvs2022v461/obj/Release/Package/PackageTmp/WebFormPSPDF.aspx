<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebFormPSPDF.aspx.cs" Inherits="WebApplicationPDFvs2022v461.WebFormPSPDF" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>ps pdf kit</title>
</head>
<body>


    
    <div id="pspdfkit" style="width: 100%; height: 100vh;"></div>

<%--<script src="/lib/pspdfkit/pspdfkit.js"></script>--%>

    <script src="Assets/pspdfkit/pspdfkit.js"></script>
<script>
	PSPDFKit.load({
		container: "#pspdfkit",
        document: "Assets/sample.pdf",
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
