<?php

    date_default_timezone_set('America/New_York');
    $datetime = new DateTime();

?>
<html>
<head>
    <meta charset="UTF-8">
    <title>jQuery Clock Plugin :: Server Time</title>
    <link rel="stylesheet" href="/inuit.min.css">
    <link href='http://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/clock.min.css">
    <style>
        .datetime--local,
        .datetime--server{
            font-size:3em;
        }
    </style>
</head>
<body class="wrapper">

    <div class="grid">

        <div class="grid__item  one-whole desk-two-thirds">
            <h2>Usage with client local time:</h2>
            <pre>
                $('.datetime').simpleServerClock();
            </pre>
        </div><!--

     --><div class="grid__item  one-whole desk-one-third">
           <div class="datetime--local"></div>
        </div>

        <hr style="margin:5px 0;">

        <div class="grid__item  one-whole desk-two-thirds">
            <h2>Usage with server local time:</h2>
            <p>
                Set the datetime variable in `PHP`. Best way would be by the `new DateTime()` function.
            </p>
            <pre>
            $('.datetime').simpleServerClock({
                serverDatetime: "<?php echo htmlentities("<?php"); ?> echo $datetime->format('Y/m/d H:i:s'); <?php echo htmlentities("?>"); ?>"
            });
            </pre>
        </div><!--

     --><div class="grid__item  one-whole desk-one-third">
           <div class="datetime--server"></div>
        </div>

        <div class="grid__item one-whole">
            <h4>Plugin Options</h4>
            <pre>
                serverDatetime : <string>  Date Format: Y/m/d/ H:i:s
                seperator      : <string>  Default `:`
                prefix         : <boolean> Default `false`
            </pre>
        </div>

   </div>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="/simple-server-jquery-clock.min.js"></script>

    <script>
        $(document).ready(function() {

            $('.datetime--local').simpleServerClock({
                prefix: true
            });

            $('.datetime--server').simpleServerClock({
                serverDatetime: "<?php echo $datetime->format('Y/m/d H:i:s'); ?>",
                prefix: true
            });

        });
    </script>

</body>
</html>