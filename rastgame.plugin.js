//META{"name":"ExampleLibraryPlugin"}*//

class ExampleLibraryPlugin {
    getName() {return "RastGame";}
    getDescription() {return "Тестовый плагин";}
    getVersion() {return "0.0.3";}
    getAuthor() {return "アニメ#7414";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
    }

    stop() {

	}
}

