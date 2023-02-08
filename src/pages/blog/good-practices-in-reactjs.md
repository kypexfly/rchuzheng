---
layout: ../../layouts/PostLayout.astro
title: 'Good practices in React.js'
pubDate: 2022-07-01
description: "Quick five good practices you can apply to your React projects."
author: "Ricardo Chu"
image:
  url: "/assets/banner-cloud.jpg"
  alt: "The Astro logo with the word One."
tags: ["javascript", "react"]
---

## Qué son las buenas prácticas

Las buenas prácticas en programación son un conjunto de técnicas y recomendaciones que se han desarrollado a lo largo del tiempo para ayudar a los programadores a crear código de calidad. Algunas de estas prácticas incluyen:

* Escribir código limpio y legible, siguiendo estándares de codificación y buenas prácticas de la comunidad de programación.
* Utilizar comentarios y documentación para explicar el código y hacerlo más fácil de entender para otros programadores.
* Realizar pruebas unitarias y de aceptación para asegurarse de que el código funciona correctamente y cumple con los requisitos.
* Utilizar versionamiento de código para controlar los cambios y permitir la colaboración con otros programadores.
* Utilizar herramientas y librerías que ayuden a mejorar la calidad del código, como linter y debuggers.

## Ejemplos con React

### Usar React.Fragment

Con `React.Fragment` se puede evitar el uso de etiquetas adicionales como `div` o `span` cuando se quieren agrupar elementos en un componente. Esto puede ser útil cuando se quiere evitar añadir elementos adicionales en el código HTML y hacerlo más legible y mantenible.

Por ejemplo, en lugar de escribir:
~~~ js
const Component = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>Parrafo</p>
    </div>
  );
}
~~~

Se puede utilizar `React.Fragment` de la siguiente manera:
~~~ js
const Component = () => {
  return (
    <React.Fragment>
      <h1>Título</h1>
      <p>Parrafo</p>
    </React.Fragment>
  );
}
~~~

De esta manera, se evitan etiquetas adicionales en el código HTML y se hace más legible y mantenible. Además, en versiones recientes de React, se puede utilizar una sintaxis abreviada para `React.Fragment`, que es simplemente `<>` y `</>`. Por lo que el ejemplo anterior se puede escribir de la siguiente manera:

~~~js
const Component = () => {
  return (
    <>
      <h1>Título</h1>
      <p>Parrafo</p>
    </>
  );
}
~~~

### Mantener la lógica de negocio y la presentación separadas

Los componentes de presentación (también llamados componentes de vista) son aquellos que se encargan de cómo se muestran los datos en la interfaz de usuario. Estos componentes suelen ser "puros", es decir, no tienen estado interno y se renderizan de manera determinista en función de sus props.

Los componentes de contenedor (también llamados componentes inteligentes), por otro lado, tienen estado interno y se encargan de la lógica de negocio. Estos componentes suelen ser "impuros", ya que pueden tener efectos secundarios como hacer peticiones a un servidor o actualizar el estado local.

Separar la lógica de negocio y la presentación en componentes diferentes puede ayudar a hacer el código más mantenible y fácil de entender. Por ejemplo, si tienes un componente `TodoList`, puedes escribirlo de la siguiente manera:

~~~js
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // obtener la lista de tareas
  }, []);

  return <TodoListView todos={todos} />;
};

const TodoListView = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);
~~~

En este ejemplo, `TodoList` es un componente de contenedor que tiene estado interno y se encarga de obtener la lista de tareas. `TodoListView`, por otro lado, es un componente de presentación que simplemente muestra la lista de tareas en una lista no ordenada.

Separando la lógica de negocio y la presentación en componentes diferentes, se hace más fácil entender el código y mantenerlo en el futuro. Además, se pueden reutilizar los componentes de presentación en diferentes partes de la aplicación sin tener que duplicar código.

### Usar `key` 

Utiliza `key` para identificar de manera única a los elementos en una lista. Cuando se renderiza una lista de elementos en React, es importante proporcionar una propiedad `key` para cada elemento de la lista. Esto permite a React identificar de manera única a cada elemento y mejorar el rendimiento al actualizar la lista.

Por ejemplo, si tienes un componente `TodoList` que renderiza una lista de tareas, puedes utilizar `key` de la siguiente manera:
~~~js
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
~~~

En este ejemplo, se está utilizando `key` para proporcionar un valor único para cada elemento de la lista. El valor de `key` debe ser un valor que no cambie y que sea único dentro de la lista. En este caso, se está utilizando el ID de la tarea como valor de `key`, ya que es un valor que no cambia y que es único para cada tarea.

Utilizar `key` es importante para mejorar el rendimiento al actualizar la lista y evitando errores comunes. Si no se proporciona un valor de `key` para cada elemento de la lista, React puede mostrar un warning en la consola del navegador y el rendimiento puede verse afectado.


### Utilizar `React.memo` o `useMemo`

`React.memo` es una forma de optimizar el rendimiento de un componente de React al evitar que se vuelva a renderizar si sus props no cambian. Cuando un componente recibe props que no cambian con frecuencia, suele ser innecesario volver a renderizarlo cada vez que se produce un cambio en otro parte de la aplicación. Esto puede ahorrar tiempo de procesamiento y mejorar el rendimiento general de la aplicación.

~~~js
import React from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  // El componente se renderizará solo si prop1 o prop2 cambian
  return (
    <div>
      {prop1} - {prop2}
    </div>
  );
};

// Se utiliza React.memo para optimizar el rendimiento del componente
export default React.memo(MyComponent);
~~~

El hook `useMemo` se utiliza de manera similar, pero en lugar de aplicarse a un componente, se aplica a una parte específica de la lógica de un componente.

~~~js
import React, { useMemo } from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  // Solo se recalculará el valor de "expensiveComputation" si prop1 o prop2 cambian
  const expensiveComputation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, [prop1, prop2]);

  return (
    <div>
      {expensiveComputation}
    </div>
  );
};

export default MyComponent;
~~~

En otras palabras, `React.memo` se utiliza a nivel de componente para evitar volver a renderizar un componente completo si sus props no cambian, mientras que `useMemo` se utiliza a nivel de lógica dentro de un componente para evitar recalcular un valor si sus input no han cambiado.

### Evitar el uso de `setState` en un componente que se está desmontando.

Cuando un componente de React se desmonta, significa que ya no está siendo utilizado en la interfaz de usuario y será eliminado por el sistema de React. Si se llama a setState en un componente que se está desmontando, puede producir errores inesperados ya que el componente ya no está en un estado válido y puede no tener acceso a sus props o state.

~~~js
import React, { useEffect } from 'react';

const MyComponent = ({ prop1, prop2 }) => {
  useEffect(() => {
    // Suscripción o temporizador
    const subscription = someAPI.subscribe(handleData);
    const timer = setInterval(doSomething, 1000);

    // Se cancela la suscripción o el temporizador  en el componente
    return () => {
      subscription.unsubscribe();
      clearInterval(timer);
    };
  }, []);

  // Lógica del componente
  ...

  return (
    <div>
      ...
    </div>
  );
};

export default MyComponent;
~~~


Hay muchas más buenas prácticas en React y es importante recordar que siempre debes buscar formas de escribir código mantenible, legible y eficiente. Gracias por leer, espero te haya sido de utilidad!