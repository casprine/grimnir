<p align="center">
  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/ghost_1f47b.png" width="100" height="100" alt="grimnir">
</p>
<h1 align="center">Grimnir</h1>
<p align="center"> ⿁ A simple project scaffolder cli tool</p>

---

## 🔧 Installation
The project has not been uploaded to npm yet so the only way to use it now is to clone it and link it.
After cloning it, run 

```bash 
npm link grimninr
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
    $ grimnir new <name> <template-name> [option]


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

- [x] Support for react --mobx
- [x] Support for Next.js --mobx
- [x] Support for Gatsby --mobx
- [x] Use listr-like to start tasks
- [x] Work on licensing
- [x] Move all extra stuff into sperate folder [babel][prettier][readme][a11y]
- [x] Change `create` to `new`
- [x] New LICENSE & README file
- [ ] Support for React Native --mobx
- [ ] Support to create component
- [ ] Add base css library
- [ ] Add pre-commit hooks for lint:css
- [ ] Helpers utilities
- [ ] Use setup like create-next-app
- [ ] Ask user and set preferred package manager
- [ ] Add more details as to what user installed [mobx][amp]
- [ ] Make .gitignore project based

## Options

##### State Management

- [ ] mobx
- [ ] redux
- [ ] context
- [ ] unstate

##### Stack

- [ ] react

  - [ ] gatsby
  - [ ] nextjs
  - [ ] afterjs
  - [ ] preact

- [ ] svelte

##### Forms

- [ ] Hooks
- [ ] Formik

##### Data Fetching

- [ ] Axios
- [ ] Bluebird
- [ ] SWR 
