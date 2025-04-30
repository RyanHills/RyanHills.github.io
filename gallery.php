<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wedding Gallery</title>
  <style>
    body {
      font-family: 'Georgia', serif;
      background: #fff8f5;
      padding: 30px;
      margin: 0;
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #7a4e4e;
    }

    .back-link {
      text-align: center;
      margin-bottom: 20px;
    }

    .back-link a {
      text-decoration: none;
      color: #7a4e4e;
      font-weight: bold;
    }

    .gallery {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }

    .gallery img {
      width: 100%;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.25s, box-shadow 0.25s;
    }

    .gallery img:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.85);
      align-items: center;
      justify-content: center;
    }

    .modal img {
      max-width: 90%;
      max-height: 85%;
      border-radius: 10px;
      border: 4px solid #fff;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    }

    .modal .close {
      position: absolute;
      top: 30px;
      right: 40px;
      font-size: 2.5rem;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
</head>
<body>

<?php
$type = $_GET['type'] ?? 'colour'; // default to colour
$folder = $type === 'bw' ? 'bw' : 'colour';
$title = $type === 'bw' ? 'Black & White Wedding Photos' : 'Colour Wedding Photos';
?>

<h1><?= htmlspecialchars($title) ?></h1>

<div class="back-link">
  <a href="index.php">&larr; Back to gallery selection</a>
</div>

<div class="gallery">
  <?php
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    foreach (scandir($folder) as $file) {
      $filePath = "$folder/$file";
      $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

      if (in_array($extension, $allowedExtensions)) {
        echo "<img src='$filePath' alt='Wedding Photo' onclick='openModal(this.src)'>";
      }
    }
  ?>
</div>

<!-- Modal -->
<div class="modal" id="imageModal" onclick="closeModal()">
  <span class="close" onclick="closeModal()">&times;</span>
  <img id="modalImg" src="" alt="Full Image">
</div>

<script>
  function openModal(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = src;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
</script>

</body>
</html>
