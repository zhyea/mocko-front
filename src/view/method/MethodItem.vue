<template>
	<el-drawer title="方法" v-model="methodDrawer" :with-header=false>
		<el-container class="method-container">
			<!--表单信息-->
			<el-form status-icon
			         ref="methodFormRef"
			         :model="methodForm"
			         :rules="methodFormRules" label-with="0" class="method-form">

				<el-form-item label="方法名">
					<el-input readonly
					          v-model="methodForm.methodName"/>
				</el-form-item>


				<el-form-item label="方法描述" prop="methodAlias">
					<el-input v-model="methodForm.methodAlias"/>
				</el-form-item>

				<el-form-item label="返回值类型">
					<el-input readonly
					          v-model="methodForm.responseType"/>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submitMethodMaintain">提交</el-button>
				</el-form-item>
			</el-form>
		</el-container>
	</el-drawer>
</template>

<script setup>

// do not use same name with ref
import {ref, onMounted} from "vue";
import {getMethod, modifyMethodInfo} from "@/api/method.js";
import {ElMessageBox} from "element-plus";

// 定义属性信息
const props = defineProps({
	methodId: String
})


const methodDrawer = ref(false)

const openMethodDrawer = () => {
	methodDrawer.value = true
}


defineExpose({openMethodDrawer})

// 方法表单
const methodForm = ref({
	methodName: '',
	methodAlias: '',
	responseType: '',
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


onMounted(() => {
	loadMethodInfo()
})


/**
 * 加载方法数据到表单
 */
function loadMethodInfo() {
	getMethod(route.query.methodId).then(
		response => {
			form.value = response.data
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

</style>