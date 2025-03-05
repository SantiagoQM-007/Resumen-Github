# Comandos Básicos de Git

## git init
Inicializa un nuevo repositorio Git

```bash
# Crear nuevo repositorio
git init

# Ejemplo de uso
mkdir mi-proyecto
cd mi-proyecto
git init
```

## git clone
Clonar un repositorio existente

```bash
# Clonar repositorio
git clone https://github.com/usuario/repositorio.git

# Clonar rama específica
git clone -b rama-especifica https://github.com/usuario/repositorio.git
```

## git add
Añadir archivos al área de preparación

```bash
# Añadir archivo específico
git add archivo.txt

# Añadir todos los archivos
git add .

# Añadir directorio
git add directorio/
```

## git commit
Registrar cambios en el repositorio

```bash
# Commit con mensaje corto
git commit -m "Mensaje descriptivo"

# Commit que abre editor para mensaje más detallado
git commit

# Commit de archivos modificados
git commit -am "Mensaje"
```

## Consejos
- Haz commits pequeños y frecuentes
- Usa mensajes descriptivos
- Revisa los cambios antes de commitear