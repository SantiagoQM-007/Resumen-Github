# Flujo de Trabajo con Git

## Flujo de Trabajo Básico

1. Clonar Repositorio
```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

2. Crear Rama de Trabajo
```bash
git checkout -b caracteristica/nueva-funcionalidad
```

3. Realizar Cambios
- Editar archivos
- Agregar nuevos archivos

4. Añadir Cambios
```bash
git add .
```

5. Commitear Cambios
```bash
git commit -m "Descripción de los cambios"
```

6. Subir Cambios
```bash
git push -u origin caracteristica/nueva-funcionalidad
```

7. Crear Pull Request
- Ir a plataforma (GitHub, GitLab)
- Crear solicitud de fusión

## Buenas Prácticas
- Ramas cortas y enfocadas
- Commits pequeños y frecuentes
- Mensajes descriptivos
- Revisar código antes de fusionar