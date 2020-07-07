<?
  function url(){
    return sprintf(
      "%s://%s%s",
      isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
      $_SERVER['SERVER_NAME'],
      dirname($_SERVER['SCRIPT_NAME'])
    );
  }

  function isVK(){
    return testUserAgent('vkShare');
  }
  function isFB(){
    return testUserAgent('facebookexternalhit');
  }
  function testUserAgent($str) {
    return stripos($_SERVER['HTTP_USER_AGENT'], $str) !== FALSE;
  }

  function request_url() {
    return sprintf(
      "%s://%s%s",
      isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
      $_SERVER['SERVER_NAME'],
      $_SERVER['REQUEST_URI']
    );
  }
  function base_url($val) {
    return url() . $val;
  }

  function getShare(){
    $result = new stdClass();
    $result->text = '�����';
    $result->description = 'Цена снижена в 1,5 раза. Выиграет каждый 2 билет. Не упусти выгодную возможность!';
    $result->image = 'images/share.jpg';
    $result->canonical_url = request_url();

	// �������� _GET ���������� � ������� ������ � ��������

    if (isVK()) {
      $result->text = "$result->text $result->description";
    }
    return $result;
  }

  $share = getShare();
?>
