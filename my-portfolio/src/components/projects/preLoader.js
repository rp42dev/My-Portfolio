const PreLoader = () => {
  const spinner = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Loading...</title>
  <style>
   #loaderBody {
     background-color: #28282a;
     color: #fff;
 }

 #loader {
     border: 12px solid #b37142;
     border-radius: 50%;
     border-top: 12px solid #28282a;
     width: 70px;
     height: 70px;
     animation: spin 1s linear infinite;
 }

 @keyframes spin {
     100% {
         transform: rotate(360deg);
     }
 }

 .center {
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     margin: auto;
 }
  </style>
</head>

<body>
  <div id="loader" class="center"></div>
</body>

</html>
`;
  return spinner;
};

export default PreLoader;
