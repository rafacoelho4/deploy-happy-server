import User from "../models/User";
import orphanagesView from "./orphanages_view";

export default {
    render(user: User) {
        console.log(user)
        return {
            id: user.id,
            email: user.email,
            orphanages: user.orphanages
            // orphanages: orphanagesView.renderMany(user.orphanages)
        };
    },
    
    renderMany(users : User[]) {
        return users.map(user => this.render(user));
    }
};


