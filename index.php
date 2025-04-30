<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ryan & Meg</title>
  <style>
    body {
      font-family: 'Georgia', serif;
      background: url('bg.jpg') no-repeat center center fixed;
      background-size: cover;
      text-align: center;
      padding: 80px 20px;
      margin: 0;
      color: #fff;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 40px;
    }

    .options {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
    }

    .option {
      background: rgba(255, 255, 255, 0.85);
      padding: 30px 50px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      font-size: 1.25rem;
      color: #333;
      text-decoration: none;
      transition: transform 0.2s, background 0.2s;
    }

    .option:hover {
      transform: scale(1.05);
      background: #fceaea;
    }
  </style>
</head>
<body>

  <h1>Our Wedding Photos</h1>

  <div class="options">
    <a class="option" href="gallery.php?type=colour">🎨 Colour Photos</a>
    <a class="option" href="gallery.php?type=bw">⚫ Black & White Photos</a>
  </div>

</body>
</html>

