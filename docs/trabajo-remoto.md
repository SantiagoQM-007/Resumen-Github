# Trabajo con Repositorios Remotos

## Añadir Repositorio Remoto
```bash
# Añadir repositorio remoto
git remote add origin https://github.com/usuario/repositorio.git
```

## Enviar Cambios
```bash
# Subir cambios a rama principal
git push origin main

# Subir rama específica
git push origin nombre-rama
```

## Obtener Cambios
```bash
# Descargar cambios sin fusionar
git fetch origin

# Descargar y fusionar cambios
git pull origin main
```

## Clonar Repositorio
```bash
# Clonar repositorio completo
git clone https://github.com/usuario/repositorio.git
```

## Configurar Seguimiento
```bash
# Establecer rama de seguimiento
git branch --set-upstream-to=origin/main main
```

## Consejos
- Sincroniza frecuentemente
- Resuelve conflictos rápidamente
- Usa pull requests para revisión de código