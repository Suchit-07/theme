const {
    components: e
} = window.enmity;
e.Alert, e.Button, e.FlatList, e.Image, e.ImageBackground, e.KeyboardAvoidingView, e.Modal, e.Pressable, e.RefreshControl, e.ScrollView, e.SectionList, e.StatusBar, e.StyleSheet, e.Switch, e.Text, e.TextInput, e.TouchableHighlight, e.TouchableOpacity, e.TouchableWithoutFeedback, e.Touchable, e.View, e.VirtualizedList, e.Form, e.FormArrow, e.FormCTA, e.FormCTAButton, e.FormCardSection, e.FormCheckbox, e.FormDivider, e.FormHint, e.FormIcon, e.FormInput, e.FormLabel, e.FormRadio;
const h = e.FormRow;
e.FormSection, e.FormSelect, e.FormSubLabel, e.FormSwitch, e.FormTernaryCheckBox, e.FormText, e.FormTextColors, e.FormTextSizes;

function x(o) {
    window.enmity.plugins.registerPlugin(o)
}

function S(o) {
    return window.enmity.assets.getIDByName(o)
}
const m = {
    byProps: (...o) => window.enmity.modules.filters.byProps(...o),
    byName: (o, n) => window.enmity.modules.filters.byName(o, n),
    byTypeName: (o, n) => window.enmity.modules.filters.byTypeName(o, n),
    byDisplayName: (o, n) => window.enmity.modules.filters.byDisplayName(o, n)
};

function A(...o) {
    return window.enmity.modules.bulk(...o)
}

function k(...o) {
    return window.enmity.modules.getByProps(...o)
}
window.enmity.modules.common;
const L = window.enmity.modules.common.Constants;
window.enmity.modules.common.Clipboard, window.enmity.modules.common.Assets, window.enmity.modules.common.Messages, window.enmity.modules.common.Clyde, window.enmity.modules.common.Avatars, window.enmity.modules.common.Native;
const b = window.enmity.modules.common.React;
window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage;
const D = window.enmity.modules.common.Toasts;
window.enmity.modules.common.Dialog, window.enmity.modules.common.Token, window.enmity.modules.common.REST, window.enmity.modules.common.Settings, window.enmity.modules.common.Users, window.enmity.modules.common.Navigation, window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack, window.enmity.modules.common.Theme, window.enmity.modules.common.Linking, window.enmity.modules.common.StyleSheet, window.enmity.modules.common.ColorMap, window.enmity.modules.common.Components, window.enmity.modules.common.Locale, window.enmity.modules.common.Profiles, window.enmity.modules.common.Lodash, window.enmity.modules.common.Logger, window.enmity.modules.common.Flux, window.enmity.modules.common.SVG, window.enmity.modules.common.Scenes, window.enmity.modules.common.Moment;

function B(o) {
    return window.enmity.patcher.create(o)
}
var E = "FastDelete",
    I = "1.2.3",
    R = "Fast Delete",
    z = {
        name: E,
        version: I,
        description: R,
    };
const l = B("cut"),
    [G, F, U, O, _] = A(m.byProps("setString"), m.byProps("openLazy", "hideActionSheet"), m.byProps("getMessage", "getMessages"), m.byProps("getChannelPermissions"), m.byProps("getCurrentUser")),
    $ = {
        ...z,
        onStart() {
            let o = k("deleteMessage");
            l.before(F, "openLazy", (n, [f, C], H) => {
                C === "MessageLongPressActionSheet" && f.then(v => {
                    l.after(v, "default", (q, d, i) => {
                        var a, c, w, u, y;
                        if (!i.props) return console.log('[Cut Local Error: Property "Props" Does not Exist on "res"]'), i;
                        let t = (y = (u = (w = (c = (a = i == null ? void 0 : i.props) == null ? void 0 : a.children) == null ? void 0 : c.props) == null ? void 0 : w.children) == null ? void 0 : u.props) == null ? void 0 : y.children[1];
                        const r = g => {
                            let p = g.find(N => N.props.message == "Delete Message");
                            return 1
                        };
                        if (t[r(t)].key == "512") return;
                        const s = U.getMessage(d[0].message.channel_id, d[0].message.id),
                            T = b.createElement(h, {
                                key: "512",
                                leading: b.createElement(h.Icon, {
                                    source: S("leaf")
                                }),
                                label: "Fast Delete",
                                onPress: () => {
                                    D.open({
                                        content: "Deleted Successfully",
                                        source: S("leaf")
                                    }), o.deleteMessage(`${s.channel_id}`, `${s.id}`), F.hideActionSheet()
                                }
                            }),
                            P = () => {
                                console.log("Failed to find the 'Copy Text' property, meaning this is likely an embed, or an attachment with no context.")
                            };
                        let M = _.getCurrentUser();
                        r(t) && (s.author.username === M.username || O.can(L.Permissions.MANAGE_MESSAGES)) ? t.splice(r(t), 0, T) : P()
                    })
                })
            })
        },
        onStop() {
            l.unpatchAll()
        }
    };
x($);