---
title: "Problemas de despacho económico con Python"
date: "2022-09-20"
description: Resolución de algunos problemas de despacho económico
tags:
  - ingeniería
  - electricidad
  - python
image: "/assets/banner-eldproblem.jpg"
---

En este post vamos a ver como resolver 2 problemas de despacho económico del libro de Allen Wood. Mi lenguaje preferido para este tipo de tareas es Python, por ello vamos a usarlo. Sin embargo, se puede utilizar cualquier otro lenguaje que permita trabajar con matrices como MATLAB u OCTAVE.

## Requisitos

- **Jupyter Notebook**: programa que viene incluido en Anaconda, una distribución que contiene lenguajes de programación (Python, R, Julia, Javascript, etc.) y entornos de desarrollo. Jupyter Notebook permite ejecutar bloques código de forma interactiva mediante celdas.
- **Librerías de Python**: solo necesitaremos Numpy que es una librería para cálculo vectorial y matricial.

## Enunciado del problema

Las funciones de costo para tres generadores térmicos, en [$/ℎ] son:

- $C_1(P_1)=0.004P_{_1^2} + 7.2P_1 + 350$
- $C_2(P_2)=0.0025P_{_2^2} + 7.3P_2 + 500$
- $C_3(P_3)=0.003P_{_3^2} + 6.74P_2 + 600$

## Resolución del problema en Python
Importaremos las librerías necesarias:
```py
import numpy as np
```

Anotaremos los coeficientes en una matriz a través del método `np.array()`, le pasaremos una lista anidada con los valores:

```py
COEF = np.array([
    #   A       B       C
        [1,     0.05,   0.40 ],
        [0.5,   0.032,  0.30 ],
        [1,     0.04,   0.25 ]
    ])
```

## Título 2
### Título 2.1
### Título 2.2
### Título 2.3

## Título 3
### Título 3.1