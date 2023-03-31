export const userData = [
    {
        id: 1,
        username: "admin",
        deptId: "6",
        deptName: "研发部",
        role: "admin",
        createTime: "2023-01-05 12:32:14",
        status: 0,
        remark: "拥有admin所有权限"
    }
];

export const roleData = [
    {
        id: 11,
        role: "admin",
        roleName: "admin",
        createTime: "2023-01-12 12:32:45",
        status: 1,
        remark: "系统管理员，拥有所有权限",
        menuIds: [
            "admin_dashboard",
            "admin_dashboard_analysis",
            "admin_dashboard_workbench",
            "admin_page",
            "admin_page_403",
            "admin_page_404",
            "admin_page_500",
            "admin_page_success",
            "admin_page_error",
            "admin_permission",
            "admin_permission_page",
            "admin_permission_button",
            "admin_permission_button:admin"
        ]
    }
];
