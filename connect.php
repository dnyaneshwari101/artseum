<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
    $conn = mysqli_connect('localhost', 'root', '', 'Artseum') or die("Connection Failed: " . mysqli_connect_error());

    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone_no']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['gender']) && isset($_POST['age']) && isset($_POST['country']) && isset($_POST['state']) && isset($_POST['city']) && isset($_POST['pincode']) && isset($_POST['place'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone_no = $_POST['phone_no'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $gender = $_POST['gender'];
        $age = $_POST['age'];
        $country = $_POST['country'];
        $state = $_POST['state'];
        $city = $_POST['city'];
        $pincode = $_POST['pincode'];
        $place = $_POST['place'];

        $sql = "INSERT INTO `account` (`name`, `email`, `mob_no`, `username`, `password`, `gender`, `age`, `country`, `state`, `city`, `pincode`, `place`) VALUES ('$name', '$email', '$phone_no', '$username', '$password', '$gender', '$age', '$country', '$state', '$city', '$pincode', '$place')";


        $query = mysqli_query($conn, $sql);
        if ($query) {
            echo 'Entry successful';
        } else {
            echo 'Error Occurred!';
        }
        
    }
}
?>
