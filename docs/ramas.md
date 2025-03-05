# Trabajo con Ramas en Git

## Crear Ramas
```bash
# Crear nueva rama
git branch nombre-rama

# Crear y cambiar a nueva rama
git checkout -b nueva-caracteristica
```

## Listar Ramas
```bash
# Listar ramas locales
git branch

# Listar todas las ramas (locales y remotas)
git branch -a
```

## Cambiar de Rama
```bash
# Cambiar a otra rama
git checkout nombre-rama
```

## Fusionar Ramas
```bash
# Fusionar rama en la rama actual
git merge nombre-rama
```

## Eliminar Ramas
```bash
# Eliminar rama local
git branch -d nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama
```

## Buenas Prácticas
- Usa nombres descriptivos para ramas
- Crea ramas para características o correcciones
- Mantén la rama principal (`main`) estable