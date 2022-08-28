const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        first_name: {
            type: String || ''
        },
        last_name: {
            type: String || ''
        },
        email: {
            type: String || '',
        },
        status: {
            type: String || ''
        },
        role: {
            type: String || ''
        },
        img: {
            type: String || ''
        },
        superAdmin: {
            type: Boolean,
            default: false
        },
        permissions: {
            user_management: {
                delete_user: {
                    type: Boolean,
                    default: false
                },
                modify_user: {
                    type: Boolean,
                    default: false
                },
                see_user_list: {
                    type: Boolean,
                    default: false
                },
            },
            billing: {
                change_billing_plan: {
                    type: Boolean,
                    default: false
                },
                cancel_billing_plan: {
                    type: Boolean,
                    default: false
                }
            },
            custom_permissions: {
                custom_permission_1: {
                    type: Boolean,
                    default: false
                },
                custom_permission_2: {
                    type: Boolean,
                    default: false
                }
            }
        }
    }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;