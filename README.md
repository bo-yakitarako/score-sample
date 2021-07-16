# スコア保存するやつのサンプル
**セキュリティ的にやべぇのでインターネットの荒波には晒しません**

代わりにローカルで鯖立てて動かしてみようね

## 環境構築
Windowsのローカル環境で動かすために、いくつか導入しないといけないものがあります

ということで以下のものを順番に導入していくよ
- [Git for Windows](https://gitforwindows.org/)
- [Node.js](https://nodejs.org/ja/)
- [PostgreSQL](https://www.postgresql.org/)

### 1. Git for Windowsの導入
**このリポジトリをローカルにcloneするために必要かも**

既にGit環境がある場合はスルー
[この記事](https://qiita.com/suke_masa/items/404f06309bb32ca6c9c5)を参考に入れといてくなんせ

### 2. Node.jsの導入
サーバーを立てるために必要だよ
[公式ダウンロードページ](https://nodejs.org/ja/download/)からWindowsのインストーラーをダウンロードしよう

インストーラーが開いたら、まあ全部適当にOKとかNextとかしてFinishまで行けばおｋ

### 3. PostgreSQLの導入
データベースだよ
スコアデータを保持しましょうね〜

これも[公式ダウンロードページ](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)から「Windows x86-64」のインストーラーをダウンロードして、インストーラー開いたら適当ぽちぽちでおｋ

インストーラーの途中にパスワードを求められる箇所があるよ
**入力したパスワードは忘れないで**
ローカル環境でしか使わないので簡易的なもので大丈夫

以上で導入完了！続いて、データベースを作成しゅるよ

## データベースを作成する
スコアデータを保存しておくデータベース(`score_sample`)を作成しよう

1. スタートメニューから「P」の欄、「PostgreSQL *」のフォルダを開く
2. 「SQL Shell」を開く
3. なんか色々出るけどパスワード入力まではEnterでおｋ
4. パスワード入力を求められたら、**インストーラーの段階で入力したパスワードを入力する**
5. `postgres=# `と出たら、`CREATE DATABASE score_sample;`とコマンド入力
6. `CREATE DATABASE`と出たら成功、`quit`とかで閉じてOK

データベースの名前を`score_sample`以外にしたかったら、`ormconfig.js`内の`score_sample`という記載を好きな名前にしてくなんせ

## パッケージとかをインストール
好きなフォルダでGit Bashを開いて、このリポジトリをクローンしよう
```shell
git clone https://github.com/bo-yakitarako/score-sample.git
```
したらそのままプロジェクト内に移動
```
cd score-sample
```
パッケージ管理ツール`yarn`をインストールするよ
```
npm install --global yarn
```
`npm`はNode.jsをインストールしたときにくっついてきてるから気にせんでおｋ

インストールできたぽかったら一応確認
```
yarn --version
```
バージョンが出ればおｋ、必要なパッケージをインストールしましょ
```
yarn install
```
しばらく時間かかるけど、Doneになったらおｋ

## DB接続
DB接続の設定は主に`ormconfig.js`内で済ませてるんだけど、ちょっとだけ足りない部分がある
PostgreSQLに接続するためのユーザー情報やね
それを記載しておく

### .env作成
プロジェクトフォルダ(`score-sample`フォルダ)以下に`.env`という環境変数を設定するファイルを作って、それにPostgreSQLのユーザー情報を書き込むよ

中身はこんな感じ
```env
PG_USERNAME="postgres"
PG_PASSWORD="インストーラーで設定したパスワードぉぉぉ"
```
`.env`ができたらデータベースと接続できるようになる

`PG_USERNAME`についてはデフォルトの`postgres`をそのまま入力で動かせるお(ほんとはあんまりよくない)

### マイグレーション
と突然聞き慣れない単語かもしれないけど、このプロジェクトに設定してあるデータ情報をDBに移す作業をしていくよ

といっても以下のコマンド打つだけやん
```
yarn migrate
```

これで`.env`とかでユーザー情報間違えてなかったり、PostgreSQLがちゃんと入ってたりしたら、なんかCLIが物々しくなって完了するよ

## サーバー起動・実行
さて、ここまでくればもう勝ったも同然
クライアントサイドをビルドしてサーバーを起動しましょう
サーバーサイドはさっきのマイグレーションの時点でビルドされております
```
yarn client-build
```
結構時間かかるので気長にお待ちを...

終わったら以下のコマンド発動！
```
yarn production
```
するとCLIに`8080をlistenします！`と出ます！

こうなったらサーバー立ったので
http://localhost:8080/
にアクセスしてみましょう

サンプルページが出るので後は煮るなり焼くなりお好きにどうぞ〜
