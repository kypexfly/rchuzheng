---
layout: ../../layouts/PostLayout.astro
title: 'Machine Learning Introduction with Python'
pubDate: 2022-12-31
description: "Use scikit-learn library for your first Machine Learning algorithm."
author: "Ricardo Chu"
image:
  url: "/assets/banner-ainn.jpg"
  alt: "The Astro logo with the word One."
tags: ["machine learning", "tutorial", "python", "scikit-learn"]
---

## ¿Qué es Machine Learning? 

El aprendizaje automático o machine learning (ML) es una rama de la inteligencia artificial que se encarga de dar a las máquinas la capacidad de aprender por sí mismas a partir de datos. Esto les permite mejorar su desempeño en tareas específicas sin necesidad de programación explícita.

## Python
Python es un lenguaje de programación muy popular en el campo del aprendizaje automático debido a su gran comunidad de desarrolladores y su amplia gama de bibliotecas y frameworks especializados en machine learning.

Uno de los aspectos más interesantes del aprendizaje automático con Python es su capacidad para trabajar con diferentes tipos de datos, desde pequeñas cantidades de información estructurada hasta grandes conjuntos de datos no estructurados. Esto permite a los desarrolladores crear modelos de machine learning que pueden ser utilizados en una amplia variedad de aplicaciones, desde la clasificación de imágenes hasta la detección de fraudes en transacciones financieras.

## scikit-learn

Una de las bibliotecas de machine learning más populares en Python es scikit-learn, que ofrece una amplia variedad de algoritmos de aprendizaje automático y herramientas para evaluar y mejorar el rendimiento de los modelos. Con scikit-learn, es posible implementar modelos de machine learning en pocas líneas de código, lo que permite a los desarrolladores experimentar y probar diferentes enfoques para resolver problemas específicos.

Con la ayuda de bibliotecas como scikit-learn, es posible implementar modelos de machine learning de manera rápida y sencilla en una amplia variedad de aplicaciones.

Ofrece una amplia gama de algoritmos de aprendizaje automático y herramientas para evaluar y mejorar el rendimiento de los modelos.

### Algoritmos de ML

Algunos de los algoritmos de aprendizaje automático que se pueden usar en scikit-learn son:

* Regresión lineal
* Regresión logística
* Árboles de decisión
* Bosques aleatorios
* Máquinas de vectores de soporte
* K vecinos más cercanos (KNN)
* Perceptrón
* Redes neuronales artificiales

### Empezando a usar sklearn en Python

Para comenzar a trabajar con scikit-learn, es necesario instalar la biblioteca en su entorno de desarrollo. Esto puede hacerse utilizando el administrador de paquetes de Python, pip, mediante el siguiente comando:

~~~
pip install -U scikit-learn
~~~

Este comando instalará scikit-learn en tu sistema y te permitirá utilizarlo en tus proyectos de machine learning.

## Ejemplo utilizando el Iris dataset

El conjunto de datos Iris es un conjunto de datos de ejemplo comúnmente utilizado en el aprendizaje automático. Contiene medidas de tres especies diferentes de iris (setosa, virginica y versicolor) y se utiliza a menudo como un ejemplo para probar algoritmos de aprendizaje automático.

Para comenzar a trabajar con el conjunto de datos Iris en scikit-learn, primero debemos importar la biblioteca y cargar los datos en nuestro programa. Podemos hacer esto con el siguiente código:

~~~py
from sklearn import datasets

iris = datasets.load_iris()
~~~

Una vez que hayamos cargado el conjunto de datos, podemos acceder a las características (los datos) y las etiquetas (la clase a la que pertenece cada muestra) usando las siguientes propiedades:

