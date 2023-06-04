# 修正履歴
[commits](https://github.com/ka2yuki/ChatApp-by-React/commits/main)

# Upgrade情報
- React v16.7 から「Hooks」が導入されることによって、「関数コンポーネント」でも「state, props」が扱えるようになっている。
- react-router-dom **v6**から、react-router型定義ファイルに「`export interface match`」がないようで、、[github.com/../react-router/../packages/react-router-dom/index.tsx](https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L168)
  - 「Hooks」の `useParams()`
などで URL params を扱う感じ(たぶん)。<br>
「Hooks」を使う際は、`fucnctionnal component`で使う必要があるようだ。<br>
(Classコンポーネントで扱うためには、関数コンポーネントで一旦Classコンポーネントをラップして、渡す...とpropsで受け取れる雰囲気...)。。たぶん

# 今回参考にした書籍情報
![React、Angular、Vue.js、React Nativeを使って学ぶ はじめてのフロントエンド開発書影](public/img/book_thumbnail.png "React、Angular、Vue.js、React Nativeを使って学ぶ はじめてのフロントエンド開発書影")

- 出版社: 技術評論社 ([出版社のページへ](http://gihyo.jp/book/2018/978-4-7741-9706-7))
- [Amazon URL](https://www.amazon.co.jp/dp/4774197068/)
- 2018年5月9日紙版発売
- 2018年5月9日電子版発売
   
# 作成手順
- G-Navエリア
- Containersエリア
- Containersへの各部品
  - フィード(component)
    - props: ok
    - state: 2 
      - use context() (functional component)
  - フォーム(component)
    - stete: 1
      - context() か Redux.
- firebaseで簡易API
- API取得コンポーネント
  
  

---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
