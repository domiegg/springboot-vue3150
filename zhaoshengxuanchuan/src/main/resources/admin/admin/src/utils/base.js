const base = {
    get() {
        return {
            url : "http://localhost:8080/zhaoshengxuanchuan/",
            name: "zhaoshengxuanchuan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhaoshengxuanchuan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "招生宣传管理系统"
        } 
    }
}
export default base
