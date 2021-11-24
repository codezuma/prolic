<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <iframe id="file_frame" href=""></iframe>
</body>
<script>
    let params = new URLSearchParams(location.search);
    let filePath = params.get('filePath');
    document.getElementById('file_frame').setAttribute("href",filePath);

</script>
</html>