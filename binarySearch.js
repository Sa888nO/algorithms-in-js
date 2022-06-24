const binarySearch = (array, searchItem) => {
  //Проверка массива
  for(let i = 0; i < array.length -1; i++){
    if(array[i] > array[i + 1]) {
      return "Массив неотсортирован"
    }
  }
  //Сортировка
  start = 0
  end = array.length - 1;
  while(start <= end){
    let center = Math.floor((start + end) / 2)
    console.log(center)
      if(array[center] == searchItem){
        return center;
      }
    else if (array[center] > searchItem){
      end = center - 1;
    }
    else if (array[center] < searchItem){
      start = center + 1;
    }
    console.log(array)
  }
  return "Такого элемента нет"
}