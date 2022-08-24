import React from 'react';


const ErrorExample = () => {
  let title = 'rastgele başlık'

  const handleClick = () => {
    title = "selam millet"
    console.log(title);
  }
  // Bu durumda sayfa yüklendiğinde render edecek ancak ben title'ı daha sonra değiştirdiğimde tekrar render etmeyeceği için ekran çıktısında değişikliği göremeyeceğim.Bu yüzden re-render için useState kullanıyoruz.
  return (
   <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}>Başlığı Değiştir</button>
  </React.Fragment> 
  // HTML kısmında DOM ağacında düğüm oluşturmadan yani memory'de yer kaplamadan oluşturduğumuz jsx formatını sarmamızı sağlıyor.(div yerine)
  )
};

export default ErrorExample;
