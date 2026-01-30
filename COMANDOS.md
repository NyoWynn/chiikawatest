# Comandos para PowerShell (si npm da error de "ejecución de scripts")

En PowerShell, en lugar de `npm`, usa **`npm.cmd`**:

```powershell
npm.cmd install
```

Para arrancar el proyecto después de instalar:

```powershell
# Terminal 1 - servidor (Gemini)
npm.cmd run server

# Terminal 2 - web
npm.cmd run dev
```

---

**Opción permanente:** permitir scripts solo para tu usuario (no requiere admin):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Después de eso podrás usar `npm` con normalidad.
