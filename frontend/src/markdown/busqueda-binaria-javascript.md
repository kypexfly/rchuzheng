---
title: "Búsqueda binaria en Javascript" 
date: '2022-12-05'
description: Entiende el algoritmo de de búsqueda binaria y aplícalo en Javascript 
tags:
- python
- tutorial
image: "/assets/banner-bsalg.jpg"
---

<!-- ## Requisitos del tutorial

* Node.js: este algoritmo lo vamos a ejecutar en Node, por lo que es indispensable tenerlo instalado. -->

## Búsqueda Binaria
El algoritmo de búsqueda binaria es un algoritmo de búsqueda eficiente que se utiliza para encontrar un elemento en una lista ordenada de elementos. Es uno de los algoritmos de búsqueda más utilizados y es muy útil cuando se trabaja con grandes conjuntos de datos. En este tutorial, te mostraré cómo implementar el algoritmo de búsqueda binaria en Javascript.

## Implementación

Para implementar el algoritmo de búsqueda binaria en Javascript, necesitamos seguir los siguientes pasos:

* Primero, debemos ordenar la lista de elementos en orden ascendente o descendente. Esto se puede hacer mediante el uso de la función `sort()` de Javascript, que permite ordenar los elementos de una lista de acuerdo a un criterio especificado.
* Una vez que la lista esté ordenada, podemos comenzar a buscar el elemento que estamos interesados. Para hacer esto, necesitamos definir dos variables: `inicio` y `fin`, que indican el comienzo y el final de la lista en la que estamos buscando. Inicialmente, `inicio` será igual a 0 y `fin` será igual a la longitud de la lista menos 1.
* Luego, debemos calcular la posición del elemento en la mitad de la lista, lo cual se puede hacer mediante la siguiente fórmula: `posicion = (inicio + fin) / 2`. Esta posición es donde se encontrará el elemento que estamos buscando, si existe en la lista.
* A continuación, debemos comparar el elemento en la posición calculada con el elemento que estamos buscando. Si son iguales, hemos encontrado el elemento y podemos detener la búsqueda. Si el elemento que estamos buscando es menor que el elemento en la posición calculada, entonces debemos continuar la búsqueda en la primera mitad de la lista, es decir, en los elementos desde `inicio` hasta `posición - 1`. Por otro lado, si el elemento que estamos buscando es mayor que el elemento en la posición calculada, entonces debemos continuar la búsqueda en la segunda mitad de la lista, es decir, en los elementos desde` posición + 1` hasta `fin`.
* Repetimos los pasos 3 y 4 hasta encontrar el elemento o hasta que la variable `inicio` sea mayor o igual que la variable `fin`, lo cual indica que el elemento no se encuentra en la lista.

## Ejemplo
A continuación, te muestro un ejemplo de cómo implementar el algoritmo de búsqueda binaria en Javascript:

```js
function busquedaBinaria(lista, elemento) {
  // Ordenamos la lista de elementos en orden ascendente
  lista.sort((a, b) => a - b);

  // Inicializamos las variables inicio y fin
  let inicio = 0;
  let fin = lista.length - 1;

  // Mientras inicio sea menor que fin, seguimos buscando
  while (inicio <= fin) {
    // Calculamos la posición del elemento en la mitad de la lista
    let posicion = Math.floor((inicio + fin) / 2);

    // Si el elemento en la posición calculada es igual al elemento que buscamos, lo hemos encontrado
    if (lista[posicion] === elemento) {
      return posicion;
    }

    // Si el elemento que buscamos es menor que el elemento en la posición calculada, continuamos la búsqueda en la primera mitad de la lista
    if (elemento < lista[posicion]) {
      fin = posicion - 1;
    }
    // Si el elemento que buscamos es mayor que el elemento en la posición calculada, continuamos la búsqueda en la segunda mitad de la lista
    else {
      inicio = posicion + 1;
    }
  }

  // Si llegamos aquí es porque no hemos encontrado el elemento en la lista
  return -1;
}
```
Para utilizar esta función, basta con llamarla y pasarle como argumentos la lista de elementos y el elemento que queremos buscar, como se muestra a continuación:

```js
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elemento = 1;
const posicion = busquedaBinaria(lista, elemento);
posicion
```

En este caso, la función devolverá la posición del elemento 5 en la lista, que es 4. Si el elemento no se encuentra en la lista, la función devolverá -1.

## Importancia

Se utiliza en una amplia gama de problemas que involucren la búsqueda de elementos en grandes conjuntos de datos. Algunos ejemplos de donde se utiliza el algoritmo de búsqueda binaria son:

* En sistemas de bases de datos, para buscar rápidamente un registro en una tabla de datos ordenada.
* En sistemas de gestión de archivos, para buscar rápidamente un archivo en un directorio ordenado.
* En sistemas de inteligencia artificial, para buscar rápidamente un elemento en una base de conocimiento ordenada.
* En sistemas de búsqueda de información en internet, para buscar rápidamente una palabra clave en un índice de páginas web ordenado.

Como puedes ver, es una herramienta muy útil que se utiliza en muchos sistemas informáticos para buscar rápidamente elementos en grandes conjuntos de datos ordenados.

Espero que este tutorial te haya ayudado a entender cómo implementar el algoritmo. Si tienes alguna duda o sugerencia, no dudes en dejar un comentario.