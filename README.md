# Multimedia Content API

Una API REST para servir contenido multimedia aleatorio incluyendo imágenes, videos, anime y más.

## Índice

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints Disponibles](#endpoints-disponibles)
- [Formato de Respuesta](#formato-de-respuesta)
- [Estructura de Archivos JSON](#estructura-de-archivos-json)
- [Instalación y Uso](#instalación-y-uso)
- [Configuración](#configuración)
- [Seguridad](#seguridad)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Soporte](#soporte)

## Estructura del Proyecto

```
multimedia-api/
├── nsfw/
│   ├── image/              # Imágenes NSFW
│   ├── lgbtiq+/            # Contenido LGBTIQ+
│   └── video/              # Videos NSFW
├── public/
│   ├── image/              # Imágenes públicas
│   ├── random/             # Contenido aleatorio
│   └── video/              # Videos públicos
├── rollimage/
│   ├── anime.json          # Enlaces de anime
│   └── pokemon.json        # Enlaces de Pokémon
├── routes/
│   ├── random-nsfw.js      # Rutas NSFW aleatorias
│   ├── roll_pokemon.js     # API de Pokémon
│   └── roll_waifu.js       # API de Waifus
├── top/
│   ├── anime.json          # Top anime
│   ├── husbando.json       # Top husbandos
│   └── waifu.json          # Top waifus
├── LICENSE                 # Licencia del proyecto
├── index.js                # Servidor principal
└── package.json            # Dependencias del proyecto
```

## Endpoints Disponibles

### Contenido Público

#### Imágenes Públicas
```http
GET /api/public/image
```
**Descripción**: Retorna una imagen aleatoria del directorio público.

**Parámetros de consulta:**
- `category` (opcional): Filtrar por categoría específica
- `format` (opcional): jpg, png, gif, webp

**Ejemplo de uso:**
```bash
curl "https://api.example.com/api/public/image?category=nature&format=jpg"
```

#### Contenido Aleatorio Público
```http
GET /api/public/random
```
**Descripción**: Retorna contenido multimedia aleatorio público (imágenes o videos).

**Parámetros de consulta:**
- `type` (opcional): image, video, any (por defecto)
- `limit` (opcional): número de elementos (1-10, por defecto 1)

#### Videos Públicos
```http
GET /api/public/video
```
**Descripción**: Retorna un video aleatorio público.

**Parámetros de consulta:**
- `duration` (opcional): short, medium, long
- `quality` (opcional): 480p, 720p, 1080p

### Contenido de Anime y Manga

#### Anime
```http
GET /api/anime
```
**Descripción**: Retorna una imagen de anime aleatoria desde `rollimage/anime.json`.

**Parámetros de consulta:**
- `genre` (opcional): action, romance, comedy, drama, etc.
- `year` (opcional): año de lanzamiento
- `studio` (opcional): estudio de animación

**Ejemplo:**
```bash
curl "https://api.example.com/api/anime?genre=action&year=2023"
```

#### Top Anime
```http
GET /api/top/anime
```
**Descripción**: Retorna anime del ranking top desde `top/anime.json`.

#### Waifu
```http
GET /api/waifu
```
**Descripción**: Retorna una waifu aleatoria desde los archivos JSON.

**Parámetros de consulta:**
- `series` (opcional): nombre de la serie
- `hair_color` (opcional): color de cabello
- `eye_color` (opcional): color de ojos

#### Husbando
```http
GET /api/husbando
```
**Descripción**: Retorna un husbando aleatorio desde `top/husbando.json`.

### Contenido Pokémon

#### Pokémon Aleatorio
```http
GET /api/pokemon
```
**Descripción**: Retorna una imagen de Pokémon aleatoria desde `rollimage/pokemon.json`.

**Parámetros de consulta:**
- `generation` (opcional): 1-9
- `type` (opcional): fire, water, grass, electric, etc.
- `legendary` (opcional): true, false

**Ejemplo:**
```bash
curl "https://api.example.com/api/pokemon?generation=1&type=fire"
```

### Contenido NSFW

**ADVERTENCIA**: Estos endpoints requieren verificación de edad y están restringidos.

#### Imágenes NSFW
```http
GET /api/nsfw/image
```
**Headers requeridos:**
```
Age-Verification: confirmed
Authorization: Bearer <token>
```

#### Videos NSFW
```http
GET /api/nsfw/video
```

#### Contenido NSFW Aleatorio
```http
GET /api/nsfw/random
```

#### Contenido LGBTIQ+
```http
GET /api/nsfw/lgbtiq
```

### Rutas Especiales

#### Contenido Aleatorio NSFW
```http
GET /api/random-nsfw
```
**Descripción**: Utiliza la ruta `random-nsfw.js` para contenido aleatorio restringido.

#### Roll Pokémon
```http
GET /api/roll/pokemon
```
**Descripción**: Utiliza `roll_pokemon.js` para obtener Pokémon con mecánica de "roll".

#### Roll Waifu
```http
GET /api/roll/waifu
```
**Descripción**: Utiliza `roll_waifu.js` para obtener waifus con sistema de rareza.

## Formato de Respuesta

### Respuesta Exitosa

```json
{
  "status": "success",
  "data": {
    "id": "12345",
    "url": "https://example.com/image.jpg",
    "type": "image",
    "category": "anime",
    "title": "Nombre del contenido",
    "series": "Serie de origen",
    "tags": ["tag1", "tag2", "tag3"],
    "metadata": {
      "width": 1920,
      "height": 1080,
      "size": "2.5MB",
      "format": "jpg"
    },
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "message": "Content retrieved successfully"
}
```

### Respuesta con Múltiples Elementos

```json
{
  "status": "success",
  "data": [
    {
      "id": "12345",
      "url": "https://example.com/image1.jpg",
      "type": "image",
      "category": "anime"
    },
    {
      "id": "12346",
      "url": "https://example.com/image2.jpg",
      "type": "image", 
      "category": "anime"
    }
  ],
  "total": 2,
  "page": 1,
  "limit": 10
}
```

### Respuesta de Error

```json
{
  "status": "error",
  "message": "No content found for the specified criteria",
  "code": 404,
  "details": {
    "requested_category": "nonexistent",
    "available_categories": ["anime", "pokemon", "waifu"]
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Códigos de Estado HTTP

- `200` - Éxito
- `400` - Solicitud incorrecta
- `401` - No autorizado (contenido NSFW)
- `403` - Prohibido (verificación de edad requerida)
- `404` - Contenido no encontrado
- `429` - Demasiadas solicitudes (rate limiting)
- `500` - Error interno del servidor

## Estructura de Archivos JSON

### anime.json
```json
{
  "metadata": {
    "total": 1000,
    "categories": ["action", "romance", "comedy", "drama"],
    "lastUpdated": "2024-01-15T00:00:00Z",
    "version": "1.2.0"
  },
  "data": [
    {
      "id": "anime_001",
      "url": "https://example.com/anime1.jpg",
      "title": "Nombre del personaje",
      "series": "Serie de origen",
      "genre": "action",
      "year": 2023,
      "studio": "Estudio de Animación",
      "tags": ["protagonist", "sword", "magic"],
      "rating": 4.8,
      "popularity": 95,
      "metadata": {
        "width": 1920,
        "height": 1080,
        "format": "jpg"
      }
    }
  ]
}
```

### pokemon.json
```json
{
  "metadata": {
    "total": 1010,
    "generations": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "types": ["normal", "fire", "water", "electric", "grass"],
    "lastUpdated": "2024-01-15T00:00:00Z"
  },
  "data": [
    {
      "id": "pokemon_025",
      "url": "https://example.com/pikachu.png",
      "name": "Pikachu",
      "number": 25,
      "generation": 1,
      "type": ["electric"],
      "rarity": "common",
      "legendary": false,
      "shiny": false,
      "stats": {
        "hp": 35,
        "attack": 55,
        "defense": 40
      },
      "tags": ["mascot", "electric", "yellow"]
    }
  ]
}
```

### waifu.json
```json
{
  "metadata": {
    "total": 500,
    "series": ["Naruto", "One Piece", "Attack on Titan"],
    "lastUpdated": "2024-01-15T00:00:00Z"
  },
  "data": [
    {
      "id": "waifu_001",
      "url": "https://example.com/waifu1.jpg",
      "name": "Nombre del personaje",
      "series": "Serie de origen",
      "hair_color": "blue",
      "eye_color": "green",
      "age": "18+",
      "personality": ["kind", "strong", "intelligent"],
      "rating": 4.9,
      "popularity": 87,
      "tags": ["warrior", "magic", "princess"]
    }
  ]
}
```

### husbando.json
```json
{
  "metadata": {
    "total": 300,
    "series": ["Jujutsu Kaisen", "Demon Slayer", "My Hero Academia"],
    "lastUpdated": "2024-01-15T00:00:00Z"
  },
  "data": [
    {
      "id": "husbando_001",
      "url": "https://example.com/husbando1.jpg",
      "name": "Nombre del personaje",
      "series": "Serie de origen",
      "hair_color": "black",
      "eye_color": "brown",
      "age": "20+",
      "personality": ["protective", "loyal", "brave"],
      "rating": 4.7,
      "popularity": 92,
      "tags": ["hero", "swordsman", "leader"]
    }
  ]
}
```

## Instalación y Uso

### Prerrequisitos

- **Node.js** 16.0.0 o superior
- **npm** 7.0.0 o superior (o yarn 1.22.0+)
- **Git** para clonar el repositorio

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/usuario/multimedia-api.git
cd multimedia-api

# Instalar dependencias
npm install
# o usando yarn
yarn install

# Copiar archivo de configuración
cp .env.example .env

# Editar variables de entorno
nano .env
```

### Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```env
# Configuración del servidor
PORT=3000
NODE_ENV=production
HOST=0.0.0.0

# Base de datos (si aplica)
DATABASE_URL=mongodb://localhost:27017/multimedia_api

# Configuración de CORS
CORS_ORIGIN=*
CORS_METHODS=GET,POST,PUT,DELETE
CORS_CREDENTIALS=true

# Configuración NSFW
NSFW_VERIFICATION=true
NSFW_AGE_VERIFICATION_REQUIRED=true
NSFW_TOKEN_SECRET=your_secret_key_here

# Rate Limiting
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_MS=60000

# Configuración de archivos
MAX_FILE_SIZE=10MB
ALLOWED_IMAGE_FORMATS=jpg,jpeg,png,gif,webp
ALLOWED_VIDEO_FORMATS=mp4,avi,mkv,mov

# Configuración de cache
CACHE_ENABLED=true
CACHE_TTL=3600

# Logs
LOG_LEVEL=info
LOG_FILE=./logs/api.log

# APIs externas (si aplica)
EXTERNAL_API_KEY=your_api_key
EXTERNAL_API_URL=https://external-api.com
```

### Ejecutar el Servidor

```bash
# Desarrollo
npm run dev
# o
yarn dev

# Producción
npm start
# o
yarn start

# Con PM2 (recomendado para producción)
npm install -g pm2
pm2 start ecosystem.config.js
```

### Scripts Disponibles

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "build": "webpack --mode production",
    "clean": "rm -rf node_modules package-lock.json"
  }
}
```

## Configuración

### Agregar Nuevo Contenido

#### 1. Archivos Multimedia

Para agregar archivos directamente al servidor:

```bash
# Imágenes públicas
cp mi_imagen.jpg public/image/

# Videos públicos  
cp mi_video.mp4 public/video/

# Contenido aleatorio
cp contenido.* public/random/
```

#### 2. Enlaces JSON

Para agregar nuevos enlaces a los archivos JSON:

```json
// Ejemplo para anime.json
{
  "data": [
    // ... contenido existente
    {
      "id": "anime_new_001",
      "url": "https://nuevo-enlace.com/imagen.jpg",
      "title": "Nuevo Personaje",
      "series": "Nueva Serie",
      "genre": "adventure",
      "year": 2024,
      "studio": "Nuevo Estudio",
      "tags": ["hero", "adventure", "fantasy"],
      "rating": 4.5,
      "popularity": 80
    }
  ]
}
```

#### 3. Validación de Enlaces

Utiliza el script de validación incluido:

```bash
npm run validate-links
```

### Filtros Avanzados

Los endpoints soportan múltiples parámetros de consulta:

```http
# Filtros básicos
GET /api/anime?genre=action&year=2023

# Filtros múltiples
GET /api/anime?genre=action,adventure&studio=Studio+Name

# Ordenamiento
GET /api/anime?sort=rating&order=desc

# Paginación
GET /api/anime?page=2&limit=20

# Búsqueda por texto
GET /api/anime?search=dragon+ball

# Filtros de rango
GET /api/pokemon?generation=1-3&rating=4-5
```

### Configuración de Rate Limiting

```javascript
// En index.js o archivo de configuración
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000, // 15 minutos
  max: process.env.RATE_LIMIT_REQUESTS || 100, // límite por ventana de tiempo
  message: {
    status: 'error',
    message: 'Too many requests, please try again later.'
  }
});
```

### Configuración de CORS

```javascript
const cors = require('cors');

const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  methods: process.env.CORS_METHODS?.split(',') || ['GET', 'POST'],
  credentials: process.env.CORS_CREDENTIALS === 'true'
};

app.use(cors(corsOptions));
```

## Seguridad

### Verificación de Edad para Contenido NSFW

```javascript
// Middleware de verificación de edad
const ageVerification = (req, res, next) => {
  const ageConfirmed = req.headers['age-verification'];
  const token = req.headers['authorization'];
  
  if (ageConfirmed !== 'confirmed' || !token) {
    return res.status(403).json({
      status: 'error',
      message: 'Age verification required for NSFW content',
      code: 'AGE_VERIFICATION_REQUIRED'
    });
  }
  
  next();
};
```

### Rate Limiting

- **Límite general**: 100 solicitudes por minuto por IP
- **Límite NSFW**: 50 solicitudes por minuto por IP
- **Límite de búsqueda**: 20 solicitudes por minuto por IP

### Validación de Entrada

```javascript
const { body, query, validationResult } = require('express-validator');

// Validación de parámetros de consulta
const validateQuery = [
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('page').optional().isInt({ min: 1 }),
  query('category').optional().isAlpha(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid query parameters',
        errors: errors.array()
      });
    }
    next();
  }
];
```

### Sanitización de Datos

Todas las respuestas pasan por filtros de sanitización:

```javascript
const sanitizeResponse = (data) => {
  // Remover campos sensibles
  const sanitized = { ...data };
  delete sanitized.internal_id;
  delete sanitized.server_path;
  delete sanitized.admin_notes;
  
  // Validar URLs
  if (sanitized.url && !isValidUrl(sanitized.url)) {
    delete sanitized.url;
  }
  
  return sanitized;
};
```

### Headers de Seguridad

```javascript
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https:", "data:"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"]
    }
  },
  crossOriginEmbedderPolicy: false
}));
```

## Testing

### Ejecutar Tests

```bash
# Todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Tests con coverage
npm run test:coverage

# Tests específicos
npm test -- --grep "anime endpoints"
```

### Estructura de Tests

```
tests/
├── unit/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── integration/
│   ├── api/
│   └── database/
└── e2e/
    └── scenarios/
```

### Ejemplo de Test

```javascript
// tests/integration/api/anime.test.js
const request = require('supertest');
const app = require('../../index');

describe('Anime API', () => {
  describe('GET /api/anime', () => {
    it('should return random anime', async () => {
      const response = await request(app)
        .get('/api/anime')
        .expect(200);
      
      expect(response.body.status).toBe('success');
      expect(response.body.data).toHaveProperty('url');
      expect(response.body.data).toHaveProperty('title');
    });
    
    it('should filter by genre', async () => {
      const response = await request(app)
        .get('/api/anime?genre=action')
        .expect(200);
      
      expect(response.body.data.genre).toBe('action');
    });
  });
});
```

## Monitoreo y Logs

### Configuración de Logs

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});
```

### Métricas y Monitoreo

```javascript
// Middleware para recopilar métricas
const collectMetrics = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration,
      userAgent: req.get('User-Agent'),
      ip: req.ip
    });
  });
  
  next();
};
```

### Health Check

```http
GET /health
```

Respuesta:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 86400,
  "version": "1.0.0",
  "services": {
    "database": "connected",
    "external_apis": "operational",
    "file_system": "accessible"
  },
  "stats": {
    "total_requests": 150000,
    "requests_per_minute": 45,
    "active_connections": 23
  }
}
```

## Contribuir

### Proceso de Contribución

1. **Fork** el proyecto
2. **Crear rama** para nueva característica:
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
3. **Desarrollar** la característica con tests
4. **Ejecutar** tests y linting:
   ```bash
   npm test
   npm run lint
   ```
5. **Commit** cambios siguiendo conventional commits:
   ```bash
   git commit -m "feat: add new anime filtering options"
   ```
6. **Push** a la rama:
   ```bash
   git push origin feature/nueva-caracteristica
   ```
7. **Crear** Pull Request

### Convenciones de Código

#### Estilo de Code

```javascript
// Usar camelCase para variables y funciones
const imageProcessor = require('./imageProcessor');

// Usar PascalCase para clases
class ContentManager {
  constructor() {
    this.cache = new Map();
  }
}

// Usar UPPER_CASE para constantes
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
```

#### Estructura de Commits

Usar [Conventional Commits](https://conventionalcommits.org/):

- `feat:` nueva característica
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` cambios de formato (sin afectar lógica)
- `refactor:` refactorización de código
- `test:` agregar o modificar tests
- `chore:` tareas de mantenimiento

#### Pull Request Template

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Cambio que rompe compatibilidad
- [ ] Actualización de documentación

## Tests
- [ ] Tests unitarios agregados/actualizados
- [ ] Tests de integración agregados/actualizados
- [ ] Todos los tests pasan

## Checklist
- [ ] El código sigue las convenciones del proyecto
- [ ] Se realizó self-review del código
- [ ] Se agregó documentación necesaria
- [ ] Los cambios no generan warnings
```

### Reportar Issues

Al reportar un problema, incluye:

1. **Descripción clara** del problema
2. **Pasos para reproducir** el error
3. **Comportamiento esperado** vs **comportamiento actual**
4. **Información del entorno**:
   - Versión de Node.js
   - Sistema operativo
   - Versión de la API
5. **Logs de error** (si aplica)
6. **Screenshots** (si es relevante)

### Sugerir Nuevas Características

Para sugerir nuevas características:

1. **Verificar** que no existe un issue similar
2. **Describir** el problema que resuelve
3. **Proponer** una solución detallada
4. **Considerar** el impacto en la API existente
5. **Agregar** ejemplos de uso

## Deployment

### Usando Docker

```dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["node", "index.js"]
```

```bash
# Construir imagen
docker build -t multimedia-api .

# Ejecutar contenedor
docker run -p 3000:3000 -e NODE_ENV=production multimedia-api
```

### Usando Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped
    
  redis:
    image: redis:alpine
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - api
    restart: unless-stopped
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy API

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          # Comandos de deployment
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

### Términos de Uso

- **Uso Personal**: Permitido sin restricciones
- **Uso Comercial**: Permitido con atribución
- **Modificación**: Permitida, debe mantener licencia original
- **Distribución**: Permitida con inclusión de la licencia
- **Garantía**: Sin garantía expresada o implícita

### Atribución

Si usas esta API en tu proyecto, considera incluir una atribución:

```
Powered by Multimedia Content API
https://github.com/usuario/multimedia-api
```

## Soporte

### Canales de Soporte

1. **Issues de GitHub**: Para bugs y sugerencias
2. **Discusiones**: Para preguntas generales
3. **Email**: soporte@multimedia-api.com
4. **Discord**: [Server de la comunidad](https://discord.gg/multimedia-api)

### FAQ

**P: ¿Cómo puedo agregar contenido NSFW?**
R: El contenido NSFW requiere verificación especial. Contacta al equipo de moderación.

**P: ¿Puedo usar la API comercialmente?**
R: Sí, bajo los términos de la licencia MIT con atribución apropiada.

**P: ¿Hay límites en las solicitudes?**
R: Sí, 100 solicitudes por minuto por IP para contenido público.

**P: ¿Cómo reporto contenido inapropiado?**
R: Usa el endpoint `/report` o contacta directamente al equipo.

### Roadmap

#### Versión 2.0 (Próximo trimestre)
- [ ] Autenticación con JWT
- [ ] API GraphQL
- [ ] Websockets para actualizaciones en tiempo real
- [ ] Sistema de favoritos
- [ ] Comentarios y ratings

#### Versión 2.1
- [ ] Búsqueda por imagen (reverse search)
- [ ] API de recomendaciones
- [ ] Integración con redes sociales
- [ ] Dashboard de administración

### Estado del Proyecto

- **Versión actual**: 1.0.0
- **Estado**: Estable en producción
- **Última actualización**: Enero 2024
- **Próxima release**: Febrero 2024

---

**Descargo de Responsabilidad**: Esta API puede contener contenido para adultos en secciones específicas. Los usuarios deben cumplir con las leyes locales aplicables y confirmar que son mayores de edad antes de acceder a contenido NSFW. El uso de esta API es bajo su propia responsabilidad.

Para más información, visita: [https://multimedia-api.com](https://multimedia-api.com)
