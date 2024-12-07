<script lang="ts" setup>
import { MdPreview } from 'md-editor-v3';
import { useRouter } from 'vue-router';
const markdownContent = `
## 配置

这里如果还原还是没有用的话，那么可以尝试让终端走代理，

这里打开终端配置.zshrc,配置终端也可以使用本地代理（这里是临时代理，建议是使用临时代理，想用的时候就开启，不用的时候就不开启，而且只对当前打开的终端有效，不会影响整体的环境）

⚠️：不使用的时候记得关闭，不然下次可能会网络连接问题

\`\`\`bash
# 设置使用代理
alias setproxy = "export http_proxy=http://127.0.0.1:端口号/; export https_proxy=http://127.0.0.1:$端口号/; echo 'Set proxy successfully'"
# 设置取消使用代理
alias unsetproxy = "unset http_proxy; unset https_proxy; echo 'Unset proxy successfully'"
\`\`\`

这里根据不同的端口号进行\`端口号的修改\` 

设置好后执行\`source.zshrc\`允许当前配置

## 启动配置

这里我们设置的脚本的启动代码是 \`setproxy\` ，所以执行\`setproxy\`这个命令即可，成功后返回下面的内容

![截屏2024-08-27 14.58.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1592412e-e2e6-47b3-8c88-40ad1f53f447/ba9398b6-ef89-48f1-bcd1-a00caf1b166e/%E6%88%AA%E5%B1%8F2024-08-27_14.58.50.png)

\`unsetproxy\` 关闭代理
`;

const router = useRouter();
const goHome = () => {
    router.push('/');
}
</script>

<template>
    <button @click="goHome">返回</button>
    <MdPreview id="preview-only" :modelValue="markdownContent" ></MdPreview>
</template>
