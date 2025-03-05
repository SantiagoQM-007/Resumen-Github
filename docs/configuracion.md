# Configuración de Git

## Configuración Global de Usuario

### Establecer Nombre de Usuario
```bash
git config --global user.name "Tu Nombre Completo"
```

### Establecer Correo Electrónico
```bash
git config --global user.email "tu.correo@ejemplo.com"
```

## Niveles de Configuración
- **Global**: Configuración para todos tus repositorios
- **Local**: Configuración específica de un repositorio
- **Sistema**: Configuración para todos los usuarios del sistema

## Verificar Configuración
```bash
# Listar toda la configuración
git config --list

# Verificar configuración específica
git config user.name
git config user.email
```

## Buenas Prácticas
- Usa siempre el mismo correo electrónico
- Utiliza tu nombre real
- Mantén la configuración global genérica