<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Swiss Canonica World</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="build/styles.css">
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">


<!-- NavigationBar -->
    <?php include 'navigation_bar_colored.php';?>


    <!-- Maps Section on the Bottom -->

<?php
    include('footer_map_section.php');
?>



<!-- Contact Input -->
    <section class="contact_page_input_section">
        <div class="container">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 no_padding">
                <div class="col-md-12">
                <h1>GET IN TOUCH</h1>
                <p>Please fill in this information to send us a message!</p></div>
                <div class="col-md-4 small_padding-lr">
                    <input type="" name="" placeholder="Name">
                </div>
                <div class="col-md-4 small_padding-lr">
                    <input type="" name="" placeholder="Email">
                </div>
                <div class="col-md-4 small_padding-lr">
                    <input type="" name="" placeholder="Subject">
                </div>

                <div class="col-md-12 small_padding-lr">
                    <textarea rows="9" placeholder="Message"></textarea>
                </div>

                <div class="col-md-12">
                    <button>Submit <i class="fa fa-angle-rigt"></i></button>
                </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    </section>


<!-- Footer General -->
<?php
    include('general_footer.php');
?>

<!-- jQuery -->

    <script type="text/javascript" src="build/scripts.js"></script>

</body>

</html>
