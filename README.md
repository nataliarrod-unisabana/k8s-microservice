# k8s-microservice

Microservicio basico en Express desplegado en Kubernetes mediante Docker, Helm y ArgoCD, con automatizacion CI/CD.

Este proyecto corresponde al taller de Arquitectura (Trabajo K8S).

## Estructura del proyecto

```
k8s-microservice/
├── Dockerfile              # Receta de construccion de la imagen
├── .dockerignore
├── .gitignore
├── package.json           # Dependencias y comando de arranque
├── src/
│   └── server.js          # Codigo del microservicio (Express)
└── chart/                 # Helm chart
    ├── Chart.yaml
    ├── values.yaml        # Valores por defecto
    ├── values-dev.yaml    # Override para desarrollo
    ├── values-prod.yaml   # Override para produccion
    └── templates/
        ├── deployment.yaml
        └── service.yaml
```

## Endpoints

| Ruta      | Descripcion                          |
|-----------|--------------------------------------|
| `/`       | Respuesta basica del servicio        |
| `/health` | Health check (usado por las probes)  |
| `/info`   | Version y entorno del servicio       |

## Tecnologias

- Docker
- Kubernetes (minikube)
- Helm
- ArgoCD
- CI/CD

## Construccion local

```bash
docker build -t k8s-microservice:1.0.0 .
docker run -d -p 3000:3000 -e APP_ENV=local --name micro k8s-microservice:1.0.0
curl localhost:3000/health
```

## Despliegue

El despliegue se realiza de forma automatizada mediante ArgoCD, que sincroniza
el estado del cluster con la definicion almacenada en este repositorio (GitOps).