<template>
	<el-container class="method-container">
		<!--表单信息-->
		<el-form status-icon
		         :model="form"
		         ref="formRef"
		         :rules="methodFormRules" label-with="0" class="method-form">

			<el-form-item label="">
				<el-input placeholder="方法名"
				          readonly
				          v-model="form.methodName"/>
			</el-form-item>


			<el-form-item label="" prop="methodAlias">
				<el-input placeholder="方法别名"
				          v-model="form.methodAlias"/>
			</el-form-item>

			<el-form-item label="">
				<el-input placeholder="返回值类型"
				          readonly
				          v-model="form.responseType"/>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">提交</el-button>
			</el-form-item>
		</el-form>
	</el-container>
</template>

<script setup>

// do not use same name with ref
import {ref} from "vue";
import {modifyMethodInfo, getMethod} from "@/api/method.js";
import {useRoute} from 'vue-router';
import {ElMessage, ElMessageBox} from "element-plus";

const route = useRoute();

const form = ref({
	methodName: '',
	methodAlias: '',
	responseType: '',
})


getMethod(route.query.methodId).then(
	response => {
		form.value = response.data
	}
)


const formRef = ref(null)

function onSubmit() {

	formRef.value.validate(
		(valid) => {
			if (valid) {
				const formData = {...form.value}
				doSubmit(formData)
			}
		}
	)
}


function doSubmit(formData) {
	modifyMethodInfo(formData).then(
		response => {
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
		}
	)
}

</script>

<style scoped lang="less">

</style>