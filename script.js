var cardsData = [
    {
      inStock: true,
      imgUrl: 'https://zoego.tech/ex/dw06/img/photos/photo06.jpg',
      text: 'Сливочно-кофейное с кусочками шоколада',
      price: 310,
      isHit: true,
      specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
      inStock: false,
      imgUrl: 'https://f.vividscreen.info/soft/472b56c483b67f15ed6a710abec7492c/Love-Cupcake-320x240.jpg',
      text: 'Сливочно-лимонное с карамельной присыпкой',
      price: 125,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'https://i.pinimg.com/736x/1b/80/8a/1b808acff5e94ed518f9c108ea520d4a.jpg',
      text: 'Сливочное с брусничным джемом',
      price: 170,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'https://i.artfile.ru/s/975307_051015_22_ArtFile_ru.jpg',
      text: 'Сливочное с кусочками печенья',
      price: 250,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'https://sun6-21.userapi.com/5xTxSZcE6OTpGibAS_FpFo5NkKZFoeE8WhoWiA/8QMl8Ugi7nU.jpg',
      text: 'Сливочное крем-брюле',
      price: 190,
      isHit: false
    }
  ];
  var renderCards = function(){
        var maket = function(teg,classteg,text){
          var element = document.createElement(teg);
          element.classList.add(classteg);
          if(text){
            element.textContent = text;
            }
          return element;
          }
          var list = function(product){
            var list_li = maket('li','good');
            var list_h2 = maket('h2', 'good__description', product.text);
             list_li.appendChild(list_h2);
      
            var list_img = maket('img', 'good__image');
            list_img.src = product.imgUrl;
            list_img.alt  = product.text;
            list_li.appendChild(list_img);
            
            var list_p = maket('p','good__price',product.price + '₽/кг');
           
           if(product.inStock){
             list_li.classList.add('good--available')
             }else{
               list_li.classList.add('good--unavailable')
               }
               
              list_li.appendChild(list_p)
            
              if(product.isHit){
                list_li.classList.add('good--hit');
                list_p = maket('p','good__special-offer', product.specialOffer)
                list_li.appendChild(list_p);
                } 
            
            return list_li;
            }
           var good = document.querySelector('.goods');
          
             for(var i = 0; i < cardsData.length; i++) {
      var cardItem = list(cardsData[i]);
              good.appendChild(cardItem); 
             }
            
           
    }
    console.log(renderCards())
  /* Техническое задание
  
  Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.
  
  Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:
  
  - inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
  - imgUrl — ссылка на изображение товара.
  - text — название продукта.
  - price — цена.
  - isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
  - specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.
  
  Вот пример вёрстки одной карточки в каталоге:
  
  <ul class="goods">
    <li class="good">
      <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
      <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
      <p class="good__price">110₽/кг</p>
    </li>
    ...
  </ul>
  
  Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.
  
  Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.
  
  */
  