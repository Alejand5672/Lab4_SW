{
  "info": {
    "_postman_id": "7e59de46-c7ad-4cf8-ada0-053ce714e41e",
    "name": "cancionespath",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "53468034",
    "_collection_link": "https://go.postman.co/collection/53468034-7e59de46-c7ad-4cf8-ada0-053ce714e41e?source=collection_link"
  },
  "item": [
    {
      "name": "Canciones de un genero",
      "request": {
        "method": "GET",
        "header": []
      },
      "response": [
        {
          "name": "Canciones de un genero",
          "originalRequest": {
            "method": "GET",
            "header": []
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "Creacion",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"titulo\": \"Numb\",\r\n  \"artista\": \"Linkin Park\",\r\n  \"genero\": \"Rock\",\r\n  \"duracion\": 185,\r\n  \"anio\": 2003\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/api/canciones",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "canciones"
          ]
        }
      },
      "response": [
        {
          "name": "Creacion",
          "originalRequest": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"titulo\": \"Numb\",\r\n  \"artista\": \"Linkin Park\",\r\n  \"genero\": \"Rock\",\r\n  \"duracion\": 185,\r\n  \"anio\": 2003\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/canciones",
              "protocol": "http",
              "host": [
                "localhost"
              ],
              "port": "3000",
              "path": [
                "api",
                "canciones"
              ]
            }
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "PUT",
      "request": {
        "method": "PUT",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"titulo\": \"nueva version\",\r\n  \"artista\": \"ed sheeran\",\r\n  \"genero\": \"Rock\",\r\n  \"duracion\": 190,\r\n  \"anio\": 2004\r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/api/canciones/51d29467-b605-470e-9090-d4332e16ff20",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "canciones",
            "51d29467-b605-470e-9090-d4332e16ff20"
          ]
        }
      },
      "response": [
        {
          "name": "PUT",
          "originalRequest": {
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"titulo\": \"nueva version\",\r\n  \"artista\": \"ed sheeran\",\r\n  \"genero\": \"Rock\",\r\n  \"duracion\": 190,\r\n  \"anio\": 2004\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/canciones/51d29467-b605-470e-9090-d4332e16ff20",
              "protocol": "http",
              "host": [
                "localhost"
              ],
              "port": "3000",
              "path": [
                "api",
                "canciones",
                "51d29467-b605-470e-9090-d4332e16ff20"
              ]
            }
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "Patch",
      "request": {
        "method": "PATCH",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"titulo\": \"Numb (Versión Live)\"\r\n}       ",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/api/canciones/46c8b923-8256-44e3-a6b1-997a067572a5",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "canciones",
            "46c8b923-8256-44e3-a6b1-997a067572a5"
          ]
        }
      },
      "response": [
        {
          "name": "Patch",
          "originalRequest": {
            "method": "PATCH",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"titulo\": \"Numb (Versión Live)\"\r\n}       ",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/canciones/46c8b923-8256-44e3-a6b1-997a067572a5",
              "protocol": "http",
              "host": [
                "localhost"
              ],
              "port": "3000",
              "path": [
                "api",
                "canciones",
                "46c8b923-8256-44e3-a6b1-997a067572a5"
              ]
            }
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "Delete",
      "request": {
        "method": "DELETE",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"titulo\": \"Numb (Versión Live)\"\r\n}       "
        },
        "url": {
          "raw": "http://localhost:3000/api/canciones/1e46d6a9-ed9b-4154-aa58-89635ea96a00",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "canciones",
            "1e46d6a9-ed9b-4154-aa58-89635ea96a00"
          ]
        }
      },
      "response": [
        {
          "name": "Delete",
          "originalRequest": {
            "method": "DELETE",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"titulo\": \"Numb (Versión Live)\"\r\n}       "
            },
            "url": {
              "raw": "http://localhost:3000/api/canciones/1e46d6a9-ed9b-4154-aa58-89635ea96a00",
              "protocol": "http",
              "host": [
                "localhost"
              ],
              "port": "3000",
              "path": [
                "api",
                "canciones",
                "1e46d6a9-ed9b-4154-aa58-89635ea96a00"
              ]
            }
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "Get por id",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/canciones/51d29467-b605-470e-9090-d4332e16ff20",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "canciones",
            "51d29467-b605-470e-9090-d4332e16ff20"
          ]
        }
      },
      "response": [
        {
          "name": "Get por id",
          "originalRequest": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/canciones/51d29467-b605-470e-9090-d4332e16ff20",
              "protocol": "http",
              "host": [
                "localhost"
              ],
              "port": "3000",
              "path": [
                "api",
                "canciones",
                "51d29467-b605-470e-9090-d4332e16ff20"
              ]
            }
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "Get id incorrecto",
      "request": {
        "method": "GET",
        "header": []
      },
      "response": [
        {
          "name": "Get id incorrecto",
          "originalRequest": {
            "method": "GET",
            "header": []
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "New Request",
      "request": {
        "method": "GET",
        "header": []
      },
      "response": [
        {
          "name": "New Request",
          "originalRequest": {
            "method": "GET",
            "header": []
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    },
    {
      "name": "Creacion con error",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"titulo\": \"road travels\"\r\n \r\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/api/canciones",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "canciones"
          ]
        }
      },
      "response": [
        {
          "name": "Creacion con error",
          "originalRequest": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"titulo\": \"road travels\"\r\n \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/canciones",
              "protocol": "http",
              "host": [
                "localhost"
              ],
              "port": "3000",
              "path": [
                "api",
                "canciones"
              ]
            }
          },
          "_postman_previewlanguage": null,
          "header": null,
          "cookie": [],
          "body": null
        }
      ]
    }
  ]
}