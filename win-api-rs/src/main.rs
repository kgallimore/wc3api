use uiautomation::actions::Transform;
use uiautomation::controls::{ControlType, PaneControl};
use uiautomation::core::UIAutomation;

fn main() {
    let automation = UIAutomation::new().unwrap();
    let root = automation.get_root_element().unwrap();

    let matcher = automation
        .create_matcher()
        .from(root)
        .timeout(1000)
        .name("Battle.net");
    if let Ok(battle_net_window) = matcher.find_first() {
        battle_net_window.try_focus();
        println!(
            "Control type: {}",
            battle_net_window.get_control_type().unwrap()
        );

        let button_matcher = automation
            .create_matcher()
            .from(battle_net_window.clone())
            .timeout(1000)
            .control_type(ControlType::Button)
            .contains_name("Play:");
        if let Ok(button) = button_matcher.find_first() {
            println!("Button: {}", button.get_name().unwrap());
            if button.is_offscreen() == Ok(false) {
                let window: PaneControl = battle_net_window.try_into().unwrap();
                let _ = window.resize(0., 0.);
                let _ = window.move_to(0., 0.);
            }
            if button.get_name().unwrap().starts_with("Play") {
                let _ = button.double_click();
            }
        }
    }
}
