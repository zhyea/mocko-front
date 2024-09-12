<template>
	<el-drawer title="方法" v-model="methodDrawer" :with-header=false destroy-on-close size="50%">
		<el-container class="method-container">
			<!--表单信息-->
			<el-form status-icon
			         ref="methodFormRef"
			         :model="methodForm"
			         label-position="right"
			         label-width="auto"
			         label-suffix=":"
			         :rules="methodFormRules" label-with="0" class="method-form">

				<el-form-item prop="methodId">
					<el-input type="hidden" v-model="methodForm.methodId"/>
				</el-form-item>

				<el-form-item label="类名" prop="typeName">
					<el-input readonly v-model="methodForm.typeName"/>
				</el-form-item>

				<el-form-item label="方法名" prop="methodName">
					<el-input readonly v-model="methodForm.methodName"/>
				</el-form-item>


				<el-form-item label="方法描述" prop="methodAlias">
					<el-input v-model="methodForm.methodAlias"/>
				</el-form-item>

				<el-form-item label="返回值类型" prop="responseType">
					<el-input readonly v-model="methodForm.responseType"/>
				</el-form-item>

				<el-form-item class="submit-btn">
					<el-button type="primary" @click="submitMethodMaintain">提交</el-button>
				</el-form-item>
			</el-form>
		</el-container>
	</el-drawer>
</template>

<script setup>

// do not use same name with ref
import {ref} from "vue";
import {getMethod, modifyMethodInfo} from "@/api/method.js";
import {ElMessageBox} from "element-plus";


const methodDrawer = ref(false)

const openMethodDrawer = (methodId) => {
	methodDrawer.value = true
	loadMethodInfo(methodId)
}


defineExpose({openMethodDrawer})


// 方法表单
const methodForm = ref({
	methodId: '',
	methodName: '',
	methodAlias: '',
	responseType: '',
	typeName: '',
})


const methodFormRef = ref()


const methodFormRules = {
	methodName: [
		{required: true, message: '请输入方法名', trigger: 'blur'},
	],
	methodAlias: [
		{required: true, message: '请输入方法描述', trigger: 'blur'},
	],
	responseType: [
		{required: true, message: '请输入响应值类型', trigger: 'blur'},
	],
};


/**
 * 加载方法数据到表单
 */
function loadMethodInfo(methodId) {
	if (methodFormRef.value) {
		methodFormRef.value.resetFields();
	}
	getMethod(methodId).then(
		response => {
			methodForm.value = response.data
		}
	)
}


/**
 * 提交方法维护信息
 */
function submitMethodMaintain() {

	methodFormRef.value.validate((valid) => {
		if (!valid) {
			return
		}
		const formData = {...methodForm.value}
		modifyMethodInfo(formData).then(response => {
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
.method-form {
	width: 100%;
}

.submit-btn .el-form-item__content {
	text-align: right !important;
	display: flex;
	justify-content: flex-end;
}
</style>