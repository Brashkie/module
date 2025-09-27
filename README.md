# 🚀 Hepein Multimedia API

<div align="center">

![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)
![Version](https://img.shields.io/badge/Version-Demo%20v1.0-orange)
![Platform](https://img.shields.io/badge/Platform-WhatsApp%20Bots-25D366)
![License](https://img.shields.io/badge/License-Proprietary-red)

**API REST especializada en contenido multimedia para bots de WhatsApp**

*Compatible con Baileys y WhatsApp Business API*

[🌐 Próximamente en hepein.com](mailto:electronicatodo2006@gmail.com) • 
[📧 Lista de Espera](mailto:electronicatodo2006@gmail.com) • 
[🔔 Síguenos](https://www.tiktok.com/@moises_yaurivilca)

</div>

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🚧 Estado Actual vs Hepein Oficial](#-estado-actual-vs-hepein-oficial)
- [🗂️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [⚡ Instalación y Uso](#-instalación-y-uso)
- [🔌 Endpoints de la API](#-endpoints-de-la-api)
- [💻 Ejemplos de Código](#-ejemplos-de-código)
- [🤖 Compatibilidad](#-compatibilidad)
- [🛠️ Estado de Desarrollo](#️-estado-de-desarrollo)
- [💝 Apoyo al Proyecto](#-apoyo-al-proyecto)
- [📞 Contacto](#-contacto)
- [⚖️ Licencia](#️-licencia)

---

## ✨ Características

### 🎯 **Especializada para WhatsApp Bots**
- 📱 Optimizada para comandos multimedia en WhatsApp
- 🔄 Soporte para sistemas roll/gacha
- 🎲 Contenido aleatorio organizado por categorías
- 🏷️ Etiquetado y separación de contenido apropiado

### 🗃️ **Contenido Organizado**
- 🎌 **+4,000 elementos** multimedia (versión actual)
- 🖼️ Imágenes de anime, Marvel, Pokémon y más
- 🎬 Videos y GIFs de alta calidad
- 📊 Rankings y sistemas de votación
- 🔞 Contenido NSFW claramente separado

### ⚡ **Alto Rendimiento**
- 🚀 Respuestas rápidas y optimizadas
- 🔗 URLs directas para multimedia
- 💾 Sistema de caché eficiente
- 🛡️ Endpoints seguros y estables

---

## 🚧 Estado Actual vs Hepein Oficial

<table>
<tr>
<th align="center">🚧 Versión Actual (Demo)</th>
<th align="center">🔥 Hepein API Oficial</th>
</tr>
<tr>
<td align="center">

⚠️ **Limitaciones:**
- Máximo 4,000 elementos
- Funcionalidades básicas
- Sin dashboard
- Soporte limitado

</td>
<td align="center">

✅ **Características Completas:**
- **+10,000 elementos** de alta calidad
- **Dashboard de administración**
- **API keys personalizadas**
- **Estadísticas en tiempo real**
- **Soporte técnico dedicado**
- **Uptime 99.9% garantizado**

</td>
</tr>
</table>

### 🎯 **¿Listo para la versión completa?**

🌐 **Próximamente en:** `hepein.com/api`  
📧 **Lista de espera:** [electronicatodo2006@gmail.com](mailto:electronicatodo2006@gmail.com)  
🔔 **Updates:** [@moises_yaurivilca](https://www.tiktok.com/@moises_yaurivilca)

> 💡 **Regístrate ahora** para acceso anticipado y descuentos de lanzamiento

---

## 🗂️ Estructura del Proyecto

```
📦 hepein-api/
├── 📁 image/                    # Contenido multimedia general
│   ├── 📁 anime/role/          # Contenido anime específico
│   │   ├── 📁 kiss/            # Imágenes de besos anime
│   │   ├── 📁 kisscheeks/      # Besos en mejillas
│   │   └── 📁 pat/             # Palmaditas/caricias
│   ├── 📁 marvel/              # Universo Marvel
│   │   ├── 📁 name/            # Personajes por nombre
│   │   └── 📁 code/            # Códigos de personajes
│   └── 📁 pokemon/             # Contenido Pokémon
│
├── 📁 nsfw/                    # Contenido adulto (18+)
│   ├── 📁 image/              # Imágenes NSFW
│   ├── 📁 lgbtq+/             # Contenido LGBTQ+
│   └── 📁 video/              # Videos NSFW
│
├── 📁 public/                  # Contenido público seguro
│   ├── 📁 image/              # Imágenes familiares
│   ├── 📁 random/             # Contenido aleatorio
│   └── 📁 video/              # Videos públicos
│
├── 📁 rollimage/               # Sistema de rolls/gacha
│   ├── 📄 anime.json          # Datos de anime
│   └── 📄 pokemon.json        # Datos de Pokémon
│
├── 📁 routes/                  # Rutas de la API
│   ├── 📄 random-nsfw.js      # Rutas NSFW aleatorias
│   ├── 📄 roll_pokemon.js     # Sistema de Pokémon
│   └── 📄 roll_waifu.js       # Sistema de waifus
│
├── 📁 top/                     # Rankings y estadísticas
│   ├── 📄 anime.json          # Rankings de anime
│   ├── 📄 husbando.json       # Rankings de husbandos
│   └── 📄 waifu.json          # Rankings de waifus
│
├── 📄 index.js                 # Servidor principal
├── 📄 package.json            # Dependencias
└── 📄 README.md               # Documentación
```

---

## 🔌 Endpoints de la API

### 📸 **Imágenes**

| Endpoint | Método | Descripción | Ejemplo |
|----------|--------|-------------|---------|
| `/api/image/anime/random` | GET | Imagen anime aleatoria | `curl api.hepein.com/image/anime/random` |
| `/api/image/marvel/random` | GET | Personaje Marvel aleatorio | `curl api.hepein.com/image/marvel/random` |
| `/api/image/pokemon/random` | GET | Pokémon aleatorio | `curl api.hepein.com/image/pokemon/random` |
| `/api/image/public/random` | GET | Imagen pública aleatoria | `curl api.hepein.com/image/public/random` |

### 🎲 **Sistema Roll/Gacha**

| Endpoint | Método | Descripción | Parámetros |
|----------|--------|-------------|------------|
| `/api/roll/waifu` | GET | Roll de waifu | `?rarity=legendary` |
| `/api/roll/pokemon` | GET | Roll de Pokémon | `?generation=1` |
| `/api/roll/anime` | GET | Roll de personaje anime | `?type=protagonist` |

### 📊 **Rankings y Estadísticas**

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/top/anime` | GET | Top anime rankings |
| `/api/top/waifu` | GET | Top waifus más populares |
| `/api/top/husbando` | GET | Top husbandos más populares |

### 🔞 **Contenido NSFW** *(Opcional)*

| Endpoint | Método | Descripción | Restricción |
|----------|--------|-------------|-------------|
| `/api/nsfw/random` | GET | Contenido NSFW aleatorio | Verificación de edad |
| `/api/nsfw/image/random` | GET | Imagen NSFW aleatoria | Verificación de edad |

---

## 💻 Ejemplos de Código

### 🤖 **Baileys (WhatsApp Web)**

```javascript
const { makeWASocket } = require('@whiskeysockets/baileys');
const axios = require('axios');

// Comando para imagen anime
case 'anime':
  try {
    const response = await axios.get('https://api.hepein.com/image/anime/random');
    const imageUrl = response.data.url;
    
    await sock.sendMessage(from, {
      image: { url: imageUrl },
      caption: '🎌 ¡Aquí tienes tu imagen anime!'
    });
  } catch (error) {
    console.error('Error:', error);
  }
  break;

// Sistema de roll de waifu
case 'rollwaifu':
  try {
    const response = await axios.get('https://api.hepein.com/roll/waifu');
    const { name, rarity, image, description } = response.data;
    
    const caption = `
✨ **${name}**
🎭 Rareza: ${rarity}
📝 ${description}
`;
    
    await sock.sendMessage(from, {
      image: { url: image },
      caption: caption
    });
  } catch (error) {
    console.error('Error:', error);
  }
  break;
```

### 🏢 **WhatsApp Business API**

```javascript
const axios = require('axios');

async function sendAnimeImage(phoneNumber) {
  try {
    // Obtener imagen de la API
    const response = await axios.get('https://api.hepein.com/image/anime/random');
    const imageUrl = response.data.url;
    
    // Enviar via WhatsApp Business API
    await axios.post(`https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`, {
      messaging_product: "whatsapp",
      to: phoneNumber,
      type: "image",
      image: {
        link: imageUrl,
        caption: "🎌 Tu imagen anime aleatoria"
      }
    }, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### 🎯 **Respuesta de la API**

```json
{
  "success": true,
  "data": {
    "url": "https://api.hepein.com/content/anime/waifu_001.jpg",
    "filename": "waifu_001.jpg",
    "category": "anime",
    "subcategory": "waifu",
    "size": "1920x1080",
    "format": "jpeg"
  },
  "timestamp": "2025-01-15T10:30:00Z"
}
```

---

## 🤖 Compatibilidad

### ✅ **Librerías Soportadas**

| Librería | Versión | Estado | Notas |
|----------|---------|--------|--------|
| **Baileys** | `^6.0.0+` | ✅ Completo | Recomendado para proyectos personales |
| **WhatsApp Business API** | `v17.0+` | ✅ Completo | Recomendado para uso comercial |
| **wa-automate** | `^4.0.0+` | ⚠️ Limitado | Funcionalidad básica |
| **venom-bot** | `^5.0.0+` | ⚠️ Limitado | En pruebas |

### 🔧 **Características por Plataforma**

<details>
<summary><b>📱 Baileys (Click para expandir)</b></summary>

- ✅ Envío de imágenes y videos
- ✅ Sistema de comandos completo
- ✅ Soporte para roll/gacha
- ✅ Gestión de grupos
- ✅ Respuestas automáticas
- ✅ Integración con bases de datos

</details>

<details>
<summary><b>🏢 WhatsApp Business API (Click para expandir)</b></summary>

- ✅ Envío de multimedia optimizado
- ✅ Webhooks para respuestas automáticas
- ✅ Templates de mensajes
- ✅ Integración empresarial
- ✅ Analytics y métricas
- ✅ Soporte oficial de Meta

</details>

---

## 🛠️ Estado de Desarrollo

### ✅ **Completado**
- [x] API REST básica funcional
- [x] Sistema de categorización de contenido
- [x] Separación de contenido NSFW/SFW
- [x] Compatibilidad con Baileys
- [x] Sistema de roll básico
- [x] Documentación inicial

### ⏳ **En Desarrollo**
- [ ] Dashboard de administración
- [ ] Sistema de autenticación con API keys
- [ ] Estadísticas en tiempo real
- [ ] Optimización de rendimiento
- [ ] Tests automatizados
- [ ] Documentación completa de la API

### 🔮 **Planificado para Hepein Oficial**
- [ ] +10,000 elementos multimedia
- [ ] CDN global para mejor rendimiento
- [ ] Sistema de suscripciones
- [ ] Panel de control avanzado
- [ ] Integraciones con otras plataformas
- [ ] Soporte multilenguaje

### 📊 **Métricas de Desarrollo**

![Progress](https://img.shields.io/badge/Progreso%20General-65%25-orange)
![API](https://img.shields.io/badge/API%20Core-90%25-brightgreen)
![Content](https://img.shields.io/badge/Contenido-70%25-yellow)
![Docs](https://img.shields.io/badge/Documentación-45%25-red)

---

## 💝 Apoyo al Proyecto

¿Te gusta lo que estamos construyendo? ¡Tu apoyo hace la diferencia!

### 🌟 **Formas de Apoyar**

- ⭐ **Dale una estrella** al repositorio
- 🍴 **Fork** el proyecto para contribuir
- 🐛 **Reporta bugs** o sugiere mejoras
- 📢 **Comparte** con otros desarrolladores
- 💰 **Contribuye económicamente** para hosting y desarrollo

### 💳 **Donaciones**

Si este proyecto te ha ayudado y quieres apoyar su desarrollo:

- 💰 **PayPal:** [Donar aquí](mailto:electronicatodo2006@gmail.com)
- ☕ **Buy me a coffee:** [Invítanos un café](mailto:electronicatodo2006@gmail.com)
- 💎 **Crypto:** Contáctanos para direcciones de wallet

### 🏆 **Contributors**

¡Gracias a todos los que hacen esto posible!

<div align="center">
<img src="https://contrib.rocks/image?repo=Brashkie/module" alt="Contributors" />
</div>

---

## 📞 Contacto

### 💬 **Soporte Técnico**

¿Necesitas ayuda implementando la API en tu bot?

- 📧 **Email:** [electronicatodo2006@gmail.com](mailto:electronicatodo2006@gmail.com)
- 💬 **Discord:** [Únete a nuestro servidor](https://discord.gg/ZMxcv2CV)
- 🐦 **Twitter:** [@MoisesYaurivil1](https://twitter.com/MoisesYaurivil1)
- 🔔 **TikTok:** [@moises_yaurivilca](https://www.tiktok.com/@moises_yaurivilca)

### 🚀 **Para Empresas**

¿Interesado en la versión empresarial de Hepein?

- 📧 **Email comercial:** [electronicatodo2006@gmail.com](mailto:electronicatodo2006@gmail.com)
- 📞 **Consultas empresariales:** Envía un email para agendar una llamada
- 💼 **Licencias corporativas:** Disponibles para equipos de desarrollo

### ⏰ **Tiempo de Respuesta**

- 🟢 **Soporte general:** 24-48 horas
- 🟡 **Consultas técnicas:** 2-3 días laborales
- 🔴 **Emergencias críticas:** 4-8 horas

---

## ⚖️ Licencia

```
© 2025 Hepein. Todos los derechos reservados.

Este proyecto está bajo licencia propietaria. No está permitido:
- ✖️ Uso comercial sin autorización
- ✖️ Redistribución del código fuente
- ✖️ Modificación y redistribución
- ✖️ Uso en productos competidores

Para solicitar permisos especiales o licencias comerciales:
📧 Contacta: electronicatodo2006@gmail.com
```

### 📜 **Términos de Uso**

- ✅ **Uso personal:** Permitido para proyectos personales y educativos
- ✅ **Atribución:** Menciona a Hepein en tu proyecto
- ✅ **Reporte de bugs:** Alentamos reportar problemas encontrados
- ⚠️ **Uso comercial:** Requiere licencia comercial

---

## ⚠️ Aviso Legal

> **Importante:** Lee antes de usar

### 🛡️ **Responsabilidades**

- Este proyecto está en **desarrollo activo** y puede experimentar cambios
- El contenido NSFW está **claramente separado** y etiquetado
- Los usuarios son **responsables** del cumplimiento de políticas de WhatsApp
- **Úsalo bajo tu propia responsabilidad**

### 📱 **Políticas de WhatsApp**

- WhatsApp tiene términos de servicio estrictos
- El contenido NSFW puede resultar en **suspensión de cuenta**
- **Evalúa los riesgos** antes de implementar contenido sensible
- Considera usar solo contenido **público/familiar** para mayor seguridad

### 🌍 **Cumplimiento Legal**

- Las leyes sobre contenido varían por jurisdicción
- **Verifica las leyes locales** antes de distribuir contenido
- Algunos contenidos pueden estar **restringidos** en ciertos países
- El proyecto **no se hace responsable** por usos ilegales

---

<div align="center">

### 🚀 **¿Listo para crear bots increíbles?**

**Únete a la revolución de los bots multimedia con Hepein**

[📧 Unirse a la Lista de Espera](mailto:electronicatodo2006@gmail.com) • 
[⭐ Dar Estrella al Repo](https://github.com/Brashkie/module) • 
[💬 Discord](https://discord.gg/ZMxcv2CV)

---

**Hecho con ❤️ por el equipo de Hepein**

*Construyendo el futuro de los bots de WhatsApp*

</div>
