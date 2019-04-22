<p align="center">
  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/ghost_1f47b.png" width="100" height="100" alt="grimnir">
</p>
<h1 align="center">Grimnir</h1>
<p align="center"> ⿁ A simple project scaffolder cli tool</p>

---

## 🔧 Installation

<h2 align="center">Install</h2>

Install with npm:

```bash
npm install -g grimnir
```

Install with yarn:

```bash
yarn global add grimnir
```

## 🔥 Usage

- scaffold a simple react project with code-splitting and HMR

```bash
grimnir create new-blog react
```

- scaffold a react project with mobx-react, formik, axios and helper components.

```bash
grimnir create new-blog react --variant mobx
```

### ✨ All CLI Options

```
  Usage
    $ grimnir create <name> <template-name> [option]


  Arguments
    <name>              name of application         reqiured
    <template-name>     name of template to use     required


  Options
   --variant <variant>   which <variant> of the template to use   optional


Global Options
    -h, --help       Display help
    -v, --version    Displays current version
    --no-color       Disable colors
    --quiet          Quiet mode - only displays warn and error messages
    -v, --verbose      Verbose mode - will also output debug messages
```

## 🛣 Roadmap

To do for Grimnir:

- [x] Support for react - mobx
- [ ] Support for Next.js --mobx
- [ ] Support for Gatsby --mobx
- [ ] Support for React Native --mobx
- [ ] Support to create component
- [ ] Support to add lib to a projects [mobx , formik , axios]
- [ ] Use listr-like to start tasks
- [ ] Add base css library
- [ ] Add pre-commit hooks for lint:css
- [ ] Helpers utilities
- [ ] Abstract templates into another repo and be pull from there
