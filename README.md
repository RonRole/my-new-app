# Electron + React + TypeScript 環境構築テスト

## アプリのベース構築まで

1. electron-forge で雛形作成

   ```bash
   yarn create electron-app my-new-app --template=webpack-typescript
   ```

1. React を導入
   ```bash
   cd my-new-app
   yarn add react react-dom
   yarn add --dev @types/react @types/react-dom
   ```

[このページ](https://qiita.com/allJokin/items/76cd3f2627d1497d0a76)をそのままなぞっただけなので、詳しくはそちらを参照

## メモ
- パッケージ管理はyarnを想定しているので、環境に無ければ入れておく
- yarn create electron-app で package.json が作成され、スクリプトもいくつか定義されているが、あらかじめ npx electron-forge import を実行していないと起動できない

- forge.config.tsのpluginsに複数の設定があると、yarn start時に"Multiple plugins tried to take control of the start command"エラーが出ることがある
