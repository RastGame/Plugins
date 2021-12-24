//META{"name":"ExampleLibraryPlugin"}*//

class ExampleLibraryPlugin {
    getName() {return "RastGame";}
    getDescription() {return "Тестовый плагин";}
    getVersion() {return "0.0.3";}
    getAuthor() {return "アニメ#7414";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://github.com/RastGame/Plugins/edit/main/rastgame.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
    }

    stop() {

	}
}

