<template>
	<el-container>
		<!--表单信息-->
		<el-form status-icon
		         :model="ruleForm"
		         ref="ruleFormRef"
		         :rules="ruleFormRules">

			<el-form-item prop="methodId">
				<el-input type="hidden" v-model="ruleForm.methodId"/>
			</el-form-item>

			<el-form-item prop="ruleId">
				<el-input type="hidden" v-model="ruleForm.ruleId"/>
			</el-form-item>


			<el-form-item label="规则名称" prop="ruleName">
				<el-input v-model="ruleForm.ruleName"/>
			</el-form-item>


			<el-form-item label="规则表达式" prop="ruleExp">
				<el-input v-model="ruleForm.ruleExp"/>
			</el-form-item>

			<el-form-item label="返回值" prop="response">
				<el-input v-model="ruleForm.response"/>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitMethodRuleMaintain">提交</el-button>
			</el-form-item>
		</el-form>
	</el-container>
</template>

<script setup>

// do not use same name with ref
import {ref} from "vue";
import {maintainMethodResponseRule} from "@/api/method.js";
import {useRoute} from 'vue-router';
import {ElMessage, ElMessageBox} from "element-plus";

const route = useRoute();

const ruleForm = ref({
	ruleId: '',
	methodId: '',
	ruleName: '',
	ruleExp: '',
	response: '',
})


const ruleFormRef = ref()


const ruleFormRules = {
	ruleName: [
		{required: true, message: '请输入规则名称', trigger: 'blur'},
	],
	ruleExp: [
		{required: true, message: '请输入规则表达式', trigger: 'blur'},
	],
	response: [
		{required: true, message: '请输入返回值', trigger: 'blur'},
	],
};


function submitMethodRuleMaintain() {

	ruleFormRef.value.validate((valid) => {
		if (!valid) {
			return
		}
		const formData = {...ruleForm.value}
		maintainMethodResponseRule(formData).then(response => {
			if (response.data) {
				ElMessageBox({
					title: '提示',
					message: '保存成功.',
					type: 'success',
				})
			} else {
				ElMessageBox({
					title: '提示',
					message: response.msg,
				})
			}
		})
		// end modify request handle
	})
}

</script>

<style scoped lang="less">

</style>