<?php
header("Access-Control-Allow-Origin: *");

try {

    $bdd = new PDO('mysql:host=localhost;dbname=portfolio', 'admin', 'online2017');
    
    $req = $bdd->query('SELECT * from projects');
    $projects = $req->fetchAll(PDO::FETCH_ASSOC);
    var_dump($projects);
    // echo json_encode($projects);

} catch (PDOException $e) {

    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();

}
?>
