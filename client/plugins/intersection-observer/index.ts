const options = {
  // родитель целевого элемента - область просмотра
  root: null,
  // без отступов
  rootMargin: "0px",
  // процент пересечения - половина изображения
  threshold: 0.5,
};

// создаем наблюдатель
export const observer = new IntersectionObserver((entries, observer) => {
  // для каждой записи-целевого элемента
  entries.forEach((entry) => {
    // если элемент является наблюдаемым
    if (entry.isIntersecting) {
      const lazyImg = entry.target;
      // выводим информацию в консоль - проверка работоспособности наблюдателя
      console.log(lazyImg);
      // прекращаем наблюдение
      observer.unobserve(lazyImg);
    }
  });
}, options);
