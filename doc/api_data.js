define({ "api": [
  {
    "type": "delete",
    "url": "/anuncios/:id",
    "title": "Remove ad by Id",
    "version": "1.0.0",
    "name": "DeleteAd",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ads unique Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./nodepop/routes/apiv1/anuncios.js",
    "groupTitle": "Ads"
  },
  {
    "type": "get",
    "url": "/anuncios/:id",
    "title": "Get ad by Id",
    "version": "1.0.0",
    "name": "GetAd",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ads unique Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of ads information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result._id",
            "description": "<p>Ad unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.nombre",
            "description": "<p>Ad name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.venta",
            "description": "<p>Ad to Sell or to buy.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.precio",
            "description": "<p>Ad price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.foto",
            "description": "<p>Ad photo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.tags",
            "description": "<p>List of ad tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n   \"result\": {\n       \"_id\": \"5a87150e06d8313cc803da15\",\n       \"nombre\": \"Bicicleta\",\n       \"venta\": \"true\",\n       \"precio\": \"230.15\",\n       \"foto\": \"bici.jpg\",\n       \"tags\": {\n           \"lifestyle\",\n           \"motor\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"success\": \"false\",\n   \"error\": \"AdsNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Server error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./nodepop/routes/apiv1/anuncios.js",
    "groupTitle": "Ads"
  },
  {
    "type": "get",
    "url": "/anuncios",
    "title": "Get ads list",
    "version": "1.0.0",
    "name": "GetAds",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "request",
            "description": "<p>List of request params.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.nombre",
            "description": "<p>Equal to name (property filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.venta",
            "description": "<p>Equal ad to Sell or to buy (property filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"n-m\"",
              "\"n-\"",
              "\"-n\"",
              "\"n\""
            ],
            "optional": true,
            "field": "request.precio",
            "description": "<p>range of prices (property filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.tag",
            "description": "<p>Equal to ad tag (property filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.start",
            "description": "<p>filter n firsts ads (page filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.limit",
            "description": "<p>get n first ads (page filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"property (asc)\"",
              "\"-property (desc)\""
            ],
            "optional": true,
            "field": "request.sort",
            "description": "<p>order by property (page filter).</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"property\"",
              "\"property-1 property-n\""
            ],
            "optional": true,
            "field": "request.fields",
            "description": "<p>select properties to show (page filter).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of ads information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result._id",
            "description": "<p>Ad unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.nombre",
            "description": "<p>Ad name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.venta",
            "description": "<p>Ad to Sell or to buy.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.precio",
            "description": "<p>Ad price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.foto",
            "description": "<p>Ad photo path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.tags",
            "description": "<p>List of ad tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n   \"success\": \"true\",\n   \"result\": {\n       \"_id\": \"5a87150e06d8313cc803da15\",\n       \"nombre\": \"Bicicleta\",\n       \"venta\": \"true\",\n       \"precio\": \"230.15\",\n       \"foto\": \"bici.jpg\",\n       \"tags\": {\n           \"lifestyle\",\n           \"motor\"\n       }\n   }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./nodepop/routes/apiv1/anuncios.js",
    "groupTitle": "Ads"
  },
  {
    "type": "post",
    "url": "/anuncios",
    "title": "Create new ad",
    "version": "1.0.0",
    "name": "PostAd",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Ad name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "venta",
            "description": "<p>Ad to Sell or to buy.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "precio",
            "description": "<p>Ad price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foto",
            "description": "<p>Ad photo path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"work\"",
              "\"lifestyle\"",
              "\"motor\"",
              "\"mobile\""
            ],
            "optional": false,
            "field": "tags",
            "description": "<p>List of ad tags.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of ads information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result._id",
            "description": "<p>Ad unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.nombre",
            "description": "<p>Ad name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.venta",
            "description": "<p>Ad to Sell or to buy.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.precio",
            "description": "<p>Ad price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.foto",
            "description": "<p>Ad photo path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.tags",
            "description": "<p>List of ad tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n   \"success\": \"true\",\n   \"result\": {\n       \"_id\": \"5a87150e06d8313cc803da15\",\n       \"nombre\": \"Bicicleta\",\n       \"venta\": \"true\",\n       \"precio\": \"230.15\",\n       \"foto\": \"bici.jpg\",\n       \"tags\": {\n           \"lifestyle\",\n           \"motor\"\n       }\n   }\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./nodepop/routes/apiv1/anuncios.js",
    "groupTitle": "Ads"
  },
  {
    "type": "put",
    "url": "/anuncios/:id",
    "title": "Update ad by Id",
    "version": "1.0.0",
    "name": "PutAd",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ads unique Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Ad name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "venta",
            "description": "<p>Ad to Sell or to buy.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "precio",
            "description": "<p>Ad price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "foto",
            "description": "<p>Ad photo path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"work\"",
              "\"lifestyle\"",
              "\"motor\"",
              "\"mobile\""
            ],
            "optional": true,
            "field": "tags",
            "description": "<p>List of ad tags.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Response operation value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>List of ads information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result._id",
            "description": "<p>Ad unique identifier.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.nombre",
            "description": "<p>Ad name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.venta",
            "description": "<p>Ad to Sell or to buy.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.precio",
            "description": "<p>Ad price.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.foto",
            "description": "<p>Ad photo path.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.tags",
            "description": "<p>List of ad tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": \"true\",\n   \"result\": {\n       \"_id\": \"5a87150e06d8313cc803da15\",\n       \"nombre\": \"Bicicleta\",\n       \"venta\": \"true\",\n       \"precio\": \"230.15\",\n       \"foto\": \"bici.jpg\",\n       \"tags\": {\n           \"lifestyle\",\n           \"motor\"\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./nodepop/routes/apiv1/anuncios.js",
    "groupTitle": "Ads"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__Nuevo_curso_03_Node_Fundamentos_git_Practica3_NodeBasico_doc_main_js",
    "groupTitle": "D__Nuevo_curso_03_Node_Fundamentos_git_Practica3_NodeBasico_doc_main_js",
    "name": ""
  }
] });
