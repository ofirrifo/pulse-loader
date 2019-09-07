# PulseLoader

```
              _                _                 _
  _ __  _   _| |___  ___      | | ___   __ _  __| | ___ _ __
 | '_ \| | | | / __|/ _ \_____| |/ _ \ / _` |/ _` |/ _ \ '__|
 | |_) | |_| | \__ \  __/_____| | (_) | (_| | (_| |  __/ |
 | .__/ \__,_|_|___/\___|     |_|\___/ \__,_|\__,_|\___|_|
 |_|
```

<img src="https://media.giphy.com/media/M9IRI3CpCTEGSvkmOw/giphy.gif">

## [Demo](https://ofirrifo.github.io/pulse-loader)

## [Example](https://stackblitz.com/edit/pulse-loader-example)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation
```sh
npm i @rifo/pulse-loader 
```

## Usage

**IMPORT MODULE**
```js

// import PulseLoaderModule
import { PulseLoaderModule } from '@rifo/pulse-loader';

@NgModule({
  imports:      [ BrowserModule, PulseLoaderModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

**COMPONENT USAGE**
```js

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `	<ngx-pulse-loader [color]="color" [width]="width"></ngx-pulse-loader>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    color = '#1abc9c';
    width = '13px';
}
```
